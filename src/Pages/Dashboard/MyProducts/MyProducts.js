import { useQuery } from "@tanstack/react-query";
import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../Contexts/AuthProvider";
import ConfirmationModal from "../../Shared/ConfirmationModal/ConfirmationModal";
import Loading from "../../Shared/Loading/Loading";

const MyProducts = () => {
  const { user, loading } = useContext(AuthContext);
  const [deletingProduct, setDeletingProduct] = useState(null);

  const closeModal = () => {
    setDeletingProduct(null);
}

  const {data: myProducts, isLoading, refetch} = useQuery({
    queryKey: ["myProducts"],
    queryFn: async () => {
      const res = await fetch(
        `https://car-cruise-bd.vercel.app/products?email=${user?.email}`
      );
      const data = await res.json();
      return data;
    },
  });

  const handleDeleteProduct = (product) => {
    fetch(`https://car-cruise-bd.vercel.app/products/${product._id}`, {
        method: 'DELETE', 
        // headers: {
        //     authorization: `bearer ${localStorage.getItem('accessToken')}`
        // }
    })
    .then(res => res.json())
    .then(data => {
        if(data.deletedCount > 0){
            refetch();
            toast.success(`Product ${product.productName} Deleted Successfully`);
        }
    })
}

const handleMakeAdvertise = (id) => {
  fetch(`https://car-cruise-bd.vercel.app/product/${id}`, {
      method: 'PUT'
  })
  .then(res => res.json())
  .then(data => {
      if(data.modifiedCount > 0){
          toast.success('Make Advertise Successful.');
          refetch();
      }
  })

}

  if (isLoading || loading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <h1 className="text-center text-4xl font-semibold mt-5 font-serif text-transparent bg-clip-text 
            bg-gradient-to-r from-sky-500 to-indigo-500">Total Products: {myProducts?.length}</h1>
      <div className="divider"></div>
      <div className="overflow-x-auto">
      <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th></th>
              <th>Avatar</th>
              <th>Name</th>
              <th>Category</th>
              <th>Resale Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {myProducts?.map((product, i) => (
              <tr key={product._id}>
                <th>{i + 1}</th>
                <td>
                  <div className="avatar">
                    <div className="w-16 rounded-full">
                      <img src={product.image} alt="" />
                    </div>
                  </div>
                </td>
                <td>{product.productName}</td>
                <td>{product.categoryName}</td>
                <td>{product.resalePrice}</td>
                <td>
                <label onClick={() => setDeletingProduct(product)} htmlFor="confirmation-modal" className="btn btn-xs btn-error">
                  Delete</label> &nbsp;&nbsp;
                <button onClick={() => handleMakeAdvertise(product._id)} 
                className="btn btn-outline btn-xs btn-warning">
                  Make Advertise</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>

      {
        deletingProduct &&
        <ConfirmationModal
                    title={`Are You Sure You Want to Delete?`}
                    message={`If you Delete ${deletingProduct.productName} It Cannot be Undone.`}
                    successAction = {handleDeleteProduct}
                    successButtonName="Delete"
                    modalData = {deletingProduct}
                    closeModal = {closeModal}
        >

        </ConfirmationModal>
      }

    </div>
  );
};

export default MyProducts;

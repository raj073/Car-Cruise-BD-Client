import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../../Contexts/AuthProvider";
import Loading from "../../Shared/Loading/Loading";

const MyProducts = () => {
  const { user, loading } = useContext(AuthContext);
  const {data: myProducts, isLoading} = useQuery({
    queryKey: ["myProducts"],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/products?email=${user?.email}`
      );
      const data = await res.json();
      return data;
    },
  });

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
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {myProducts.map((product, i) => (
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
                <td>{product.salesStatus}</td>
                <td>
                <label className="btn btn-xs btn-error">Delete</label> &nbsp;&nbsp;
                <label className="btn btn-outline btn-xs btn-warning">Make Advertise</label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
    </div>
  );
};

export default MyProducts;

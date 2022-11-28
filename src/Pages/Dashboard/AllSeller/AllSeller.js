import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Contexts/AuthProvider';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';
import Loading from '../../Shared/Loading/Loading';

const AllSeller = () => {

    const { user, loading } = useContext(AuthContext);
    const [deletingSeller, setDeletingSeller] = useState(null);

    const closeModal = () => {
        setDeletingSeller(null);
    }

    const {data: sellers, isLoading, refetch} = useQuery({
        queryKey: ["sellers"],
        queryFn: async () => {
          const res = await fetch(
            `http://localhost:5000/users/allseller`
          );
          const data = await res.json();
          return data;
        },
      });

      const handleDeleteSeller = (seller) => {
        fetch(`http://localhost:5000/users/${seller._id}`, {
            method: 'DELETE', 
            // headers: {
            //     authorization: `bearer ${localStorage.getItem('accessToken')}`
            // }
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                refetch();
                toast.success(`User Deleted Successfully`)
            }
        })
    }


      if (isLoading || loading) {
        return <Loading></Loading>;
      }

    return (

      <div>
      <h1 className="text-center text-4xl font-semibold mt-5 font-serif text-transparent bg-clip-text 
            bg-gradient-to-r from-sky-500 to-indigo-500">No of Seller: {sellers?.length}</h1>
      <div className="divider"></div>
      <div className="overflow-x-auto">
      <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th></th>
              <th>Avatar</th>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {sellers?.map((seller, i) => (
              <tr key={seller._id}>
                <th>{i + 1}</th>
                <td>
                  <div className="avatar">
                    <div className="w-16 rounded-full">
                      <img src={seller.photo} alt="" />
                    </div>
                  </div>
                </td>
                <td>{seller.name}</td>
                <td>{seller.email}</td>
                <td>
                <label onClick={() => setDeletingSeller(seller)} htmlFor="confirmation-modal" className="btn btn-xs btn-error">
                  Delete</label> &nbsp;&nbsp;
                <label className="btn btn-outline btn-xs btn-primary">Make Verified</label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>

      {
        deletingSeller &&
        <ConfirmationModal
                    title={`Are You Sure You Want to Delete?`}
                    message={`If you Delete ${deletingSeller.name} It Cannot be Undone.`}
                    successAction = {handleDeleteSeller}
                    successButtonName="Delete"
                    modalData = {deletingSeller}
                    closeModal = {closeModal}
        >

        </ConfirmationModal>
      }

    </div>
    );
};

export default AllSeller;
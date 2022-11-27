import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Contexts/AuthProvider';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';
import Loading from '../../Shared/Loading/Loading';

const AllBuyer = () => {

    const { user, loading } = useContext(AuthContext);
    const [deletingSeller, setDeletingBuyer] = useState(null);

    const closeModal = () => {
        setDeletingBuyer(null);
    }

    const {data: buyers, isLoading, refetch} = useQuery({
        queryKey: ["buyers"],
        queryFn: async () => {
          const res = await fetch(
            `http://localhost:5000/users/allbuyer`
          );
          const data = await res.json();
          return data;
        },
      });


      const handleDeleteBuyer = (buyer) => {
        fetch(`http://localhost:5000/users/${buyer._id}`, {
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
            bg-gradient-to-r from-sky-500 to-indigo-500">No of Buyer: {buyers?.length}</h1>
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
            {buyers?.map((buyer, i) => (
              <tr key={buyer._id}>
                <th>{i + 1}</th>
                <td>
                  <div className="avatar">
                    <div className="w-16 rounded-full">
                      <img src={buyer.photo} alt="" />
                    </div>
                  </div>
                </td>
                <td>{buyer.name}</td>
                <td>{buyer.email}</td>
                <td>
                <label onClick={() => setDeletingBuyer(buyer)} htmlFor="confirmation-modal" className="btn btn-xs btn-error">
                  Delete</label> 
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
                    successAction = {handleDeleteBuyer}
                    successButtonName="Delete"
                    modalData = {deletingSeller}
                    closeModal = {closeModal}
        >

        </ConfirmationModal>
      }

    </div>
    );
};

export default AllBuyer;
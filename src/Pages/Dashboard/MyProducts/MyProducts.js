import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider';
import Loading from '../../Shared/Loading/Loading';

const MyProducts = () => {

    const {user} = useContext(AuthContext);

    const { data: products = [], isLoading, refetch} = useQuery({
        queryKey: ["products"],
        queryFn: async () => {
          try {
            const res = await fetch(`http://localhost:5000/myproducts/${user?.email}`);
            const data = await res.json();
            return data;
          } 
          catch (error) {
    
          }
        },
      });

      if(isLoading){
        return <Loading></Loading>
      }

    return (

<div>
      <h2 className="text-3xl mb-5">Manage Doctors: {products?.length}</h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th></th>
              <th>Avatar</th>
              <th>Name</th>
              <th>Email</th>
              <th>Specialty</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* {products.map((product, i) => (
              <tr key={product._id}>
                <th>{i + 1}</th>
                <td>
                  <div className="avatar">
                    <div className="w-16 rounded-full">
                      <img src={product.image} alt="" />
                    </div>
                  </div>
                </td>
                <td>{}</td>
                <td>{}</td>
                <td>{}</td>
                <td>
                <label className="btn btn-sm btn-error">Delete</label>
                </td>
              </tr>
            ))} */}
          </tbody>
        </table>
      </div>


    </div>
    );
};

export default MyProducts;
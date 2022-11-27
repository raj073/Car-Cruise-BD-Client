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
      <h1>This is my product</h1>
      <p>Total Data is: {myProducts?.length}</p>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Product Name</th>
              <th>Category</th>
              <th>Picture</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {
              // myProducts.map((user, i) => <tr key={user._id}>
              //     <th>{i + 1}</th>
              //     <td>{user.name}</td>
              //     <td>{user.email}</td>
              //     <td>{user?.role !== 'admin' && <button onClick={() => handleMakeAdmin(user._id)} 
              //className='btn btn-xs btn-primary'>Make Admin</button>}</td>
              //     <td><button className='btn btn-xs btn-danger'>Delete</button></td>
              // </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyProducts;

import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider";
import Loading from "../../Shared/Loading/Loading";

const MyOrders = () => {
  const { user, loading } = useContext(AuthContext);

  const url = `http://localhost:5000/orders?email=${user?.email}`;

  const { data: orders = [], isLoading } = useQuery({
    queryKey: ["orders", user?.email],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    },
  });

  if (loading || isLoading) {
    <Loading></Loading>;
  }

  return (
    <div>
      <h1
        className="text-center text-4xl font-semibold mt-5 font-mono text-transparent bg-clip-text 
            bg-gradient-to-r from-sky-500 to-indigo-500"
      >
        Total No. of Orders: {orders?.length}
      </h1>
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
            {orders?.map((order, i) => (
              <tr key={order._id}>
                <th>{i + 1}</th>
                <td>
                  <div className="avatar">
                    <div className="w-16 rounded-full">
                      <img src={order.image} alt="" />
                    </div>
                  </div>
                </td>
                <td>{order.productName}</td>
                <td>{order.price}</td>
                <td>
                    
                  {order.price && !order.paid && (
                    <Link to={`/dashboard/payment/${order._id}`}>
                      <button className="btn btn-outline btn-primary rounded-none">
                        Pay
                      </button>
                    </Link>
                  )}

                  {/* {order.price && order.paid && (
                    <span className="text-green-500">Paid</span>
                  )} */}
                  
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;

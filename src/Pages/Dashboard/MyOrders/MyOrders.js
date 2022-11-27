import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider';
import Loading from '../../Shared/Loading/Loading';

const MyOrders = () => {

    const {user, loading} = useContext(AuthContext);

    const url = `http://localhost:5000/orders?email=${user?.email}`;

    const {data: orders = []} = useQuery({
        queryKey: ["orders", user?.email],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
    })

    if(loading){
        <Loading></Loading>
    }

    return (

        <div>

            <h1>This is My Orders</h1>
            
        </div>
    );
};

export default MyOrders;
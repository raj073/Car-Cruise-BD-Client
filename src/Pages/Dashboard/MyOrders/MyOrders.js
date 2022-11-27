import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider';

const MyOrders = () => {

    const {user} = useContext(AuthContext);

    const url = `http://localhost:5000/orders?email=${user?.email}`;

    const {data: orders = []} = useQuery({
        queryKey: ["orders", user?.email],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
    })

    return (

        <div>

            <h1>This is My Orders</h1>
            
        </div>
    );
};

export default MyOrders;
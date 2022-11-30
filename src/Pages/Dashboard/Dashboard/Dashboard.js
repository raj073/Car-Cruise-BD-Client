import React, { useContext } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider';

const Dashboard = () => {

    const {user} = useContext(AuthContext);

    return (

        <div>

            <h1 className="text-center text-4xl font-semibold mt-5 font-mono text-transparent bg-clip-text 
            bg-gradient-to-r from-sky-500 to-indigo-500">Welcome to Dashboard</h1>
            <div className="divider"></div>

            <h2 className="text-center underline text-3xl text-transparent bg-clip-text bg-gradient-to-r
         from-cyan-500 to-blue-500 py-5 font-mono">You're Signed in as {user?.displayName}</h2>
            <h2 className="text-center underline text-3xl text-transparent bg-clip-text bg-gradient-to-r
         from-cyan-500 to-blue-500 py-5 font-mono">Your Email: {user?.email}</h2>
            
        </div>
    );
};

export default Dashboard;
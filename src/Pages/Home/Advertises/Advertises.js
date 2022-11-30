import { useQuery } from "@tanstack/react-query";
import React from "react";
import Loading from "../../Shared/Loading/Loading";
import Advertise from "../Advertise/Advertise";

const Advertises = () => {
  const { data: advertises = [], isLoading } = useQuery({
    queryKey: ["advertises"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/advertisement/products");
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      { advertises[0]?.advertisement && !advertises[0]?.paid &&
        <div className="text-center mb-5 mt-12">
        <h3
          className="text-5xl font-semibold text-transparent bg-clip-text 
            bg-gradient-to-r from-sky-500 to-indigo-500 mb-2 font-mono"
        >
          Advertised Product: {advertises?.length}
        </h3>
        <div className="divider"></div>
      </div>
      }

        
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10">
        
        {   
            advertises[0]?.advertisement &&
            advertises?.map((advertise) => (
                <Advertise key={advertise._id} advertise={advertise}></Advertise>
        ))}
        
      </div>
    </div>
  );
};

export default Advertises;

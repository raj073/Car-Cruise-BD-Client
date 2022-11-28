import { useQuery } from "@tanstack/react-query";
import Loading from "../../Shared/Loading/Loading";
import CarCategory from "../CarCategory/CarCategory";

const CarCategories = () => {

  const { data: carCategories = [], isLoading } = useQuery({
    queryKey: ["carCategories"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/categories");
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Loading></Loading> ;
  }

  return (
    <div>

      <div className="text-center mb-5 mt-12">
        <h3 className="text-5xl font-semibold text-transparent bg-clip-text 
            bg-gradient-to-r from-sky-500 to-indigo-500 mb-2 font-mono">
          Brand Wise Car
        </h3>
        <h2 className="text-3xl text-transparent bg-clip-text bg-gradient-to-r
         from-cyan-500 to-blue-500 py-5 font-mono">Available Car Category</h2>
      </div>

      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10">
        {carCategories?.map((category) => (
          <CarCategory key={category._id} category={category}></CarCategory>
        ))}
      </div>
    </div>
  );
};

export default CarCategories;

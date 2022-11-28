import React from "react";
import ArdoBenedict from "../../../assets/Testimonial/ArdoBenedict.jpg";
import JohnHendric from "../../../assets/Testimonial/JohnHendric.jpg";
import JohannCanola from "../../../assets/Testimonial/JohannCanola.jpg";
import Testimonial from "./Testimonial";

const Testimonials = () => {

  const ratings = [
    {
      _id: 1,
      name: "Ardo Benedict",
      img: ArdoBenedict,
      review:
        "The Quality is Excellent. Its well worth the money for their high-quality Car products; Highly Recommended!",
      location: "Sweden",
      designation: "Teacher",
    },
    {
      _id: 2,
      name: "John Hendric",
      img: JohnHendric,
      review:
        "The Quality is Excellent. Its well worth the money for their high-quality Car products; Highly Recommended!",
        designation: "Businessman",
    },
    {
      _id: 3,
      name: "Johann Canola",
      img: JohannCanola,
      review:
        "The Quality is Excellent. Its well worth the money for their high-quality Car products; Highly Recommended!",
        designation: "Director Officer",
    },
  ];

  return (
    <div className="mt-16">
      <div className="text-center mb-5">
        <h3 className="text-6xl font-semibold text-primary mb-2 font-mono">
        Customers Testimonial
        </h3>
        <h2 className="text-2xl">
        A great testimonial should increase the trustworthiness of a brand <br /> and its products 
        and attract new customers.
        </h2>
      </div>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {ratings.map((rating) => (
          <Testimonial
          key={rating._id}
          rating={rating}
          >
          </Testimonial>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;

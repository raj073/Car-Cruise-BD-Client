import React from 'react';
import Banner from './Banner/Banner';
import CarCategories from './CarCategories/CarCategories';
import Testimonials from './Testimonials/Testimonials';

const Home = () => {

    return (

        <div className='mb-32'>

            <Banner></Banner>
            <CarCategories></CarCategories>
            <Testimonials></Testimonials>
            
        </div>
    );
};

export default Home;
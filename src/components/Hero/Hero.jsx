import React from 'react';
import  hero_img from '../../assets/Image/hero.png'

const Hero = () => {
    return (
        <div className="hero  bg-white min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={hero_img}
            className="w-1/2 rounded-lg shadow-2xl max-md:w-full" />
          <div >
            <h1 className="text-6xl font-bold">One Step Closer <br /> To Your <br /> <span className='bg-gradient-to-r from-teal-400 to-blue-500 text-transparent bg-clip-text'>Dream Job</span></h1>
            <p className="py-6">
            Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.
            </p>
            <button className="btn bg-gradient-to-r from-teal-400 to-blue-500">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default Hero;
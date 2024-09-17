import React from 'react';
import { useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

const Category = ({category}) => {
    const [CounterON ,setCounterON] =useState(false);
    const {category_name,logo,availability}=category;
    return (
        <ScrollTrigger onEnter={()=>setCounterON(true)} onExit={()=> setCounterON(false)}>
        <div className='flex flex-col py-3 px-3 w-60 h-40 mb-6 bg-slate-100 rounded-sm border-2 '>
            <div className='w-16 h-16 flex justify-center items-center rounded-sm bg-slate-50 '>
<img src={logo} alt="Logo" className='object-contain w-12 h-12' />
            </div> 
            <h2 className='font-bold mt-2'>{category_name}</h2>
            <p>
               {CounterON && <CountUp start={0} end={availability} duration={3} delay={0} ></CountUp>}+ Job Availability 
            </p>
        </div>
        </ScrollTrigger>
    );
};

export default Category;
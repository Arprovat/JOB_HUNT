import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';

import Category from '../Category/Category';


const JobType = () => {
    const [Categories,setCategories] =useState([]);
     useEffect(()=>{
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCategories(data))
     },[])
    return (
        <div className=''>
            <h1 className='text-4xl  font-bold text-center'>Job Categories</h1>
            <p className='text-center text-gray-700 mt-4'>Explore thousands of job opportunities with all the information you need. Its your future</p>
           <div className='mt-6  place-items-center gap-10  grid grid-cols-4 max-md:grid-cols-2'>
           {
            Categories.map((category)=> <Category  key={category.id} category={category}></Category>)
           }
           </div>
        </div>
    );
};

export default JobType;
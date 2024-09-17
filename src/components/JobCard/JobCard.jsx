import React from 'react';
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { Link } from 'react-router-dom';

const JobCard = ({job}) => {
    const {id,logo,job_title,remote_or_onsite,company_name,job_type,location,salary}=job;
    return (
        <div className='w-[648px] h-[362px]   border-2 rounded-md mb-4 px-5'>
            <img src={logo} alt="logo" className='w-16 h-16 mt-4 object-contain' />
            <h1 className='font-extrabold'>{job_title}</h1>
            <p className='text-gray-400 font-semibold'>{company_name}</p>
            <div className='flex mt-4 text-gray-500 font-semibold'>
                <p className='shadow-md w-20 h-10 mr-3 border-2 rounded-sm flex justify-center items-center'>{remote_or_onsite}</p>
                <p className='shadow-md w-20 h-10 border-2 rounded-sm flex justify-center items-center'>{job_type}</p>
            </div>
            <div className='flex mt-4 text-gray-500 font-semibold'>
                <p className='flex mr-3 justify-center items-center' > <IoLocationOutline className='mr-2 w-6 h-6 font-semibold'></IoLocationOutline> {location}</p>
                <p className='flex justify-center items-center  font-semibold'><AiOutlineDollarCircle className='mr-2 w-6 h-6'></AiOutlineDollarCircle> Salary:{salary}</p>
            </div>
           <Link to={`JobDetails/${id}`}>
           <button className='mt-6  bg-gradient-to-r from-teal-400 to-blue-500 text-center font-bold w-40 h-10 rounded-lg active:bottom-2 active:border-slate-700 '>View Details</button>
           </Link> 
        </div>
    );
};

export default JobCard;
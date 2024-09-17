import React, { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLoaderData, useParams } from 'react-router-dom';
import { SaveJobApplication } from '../../utility/LocalStore/LocalStore';

const JobDetails = () => {
    const Jobs = useLoaderData();
    const { id } = useParams();
    const idINT = parseInt(id);
    const job = Jobs.find(j => j.id === idINT);

    const notify = () => { 
        SaveJobApplication(idINT);
        toast.success('Your apply successful') };
       


    return (
        <div className='h-full '>
            <h1 className='text-5xl mt-6 font-bold leading-normal text-center'>Job Details</h1>
            <div className='max-md:px-10 mt-8 grid grid-cols-2 max-md:grid-cols-1   mb-20'>
                <div className=''>
                    <p className='mt-3 leading-8'><span className='font-bold text-xl'>Job description: </span><span className='text-xl text-gray-500 leading-7'>{job.job_description}</span></p>
                    <p className='mt-3 leading-8'><span className='font-bold text-xl'>Job Responsibility:</span><span className='text-xl text-gray-500 leading-7' >{job.job_responsibility}</span></p>
                    <p className='mt-3 leading-8'><span className='font-bold text-xl'>Education Requirements:</span> <span className='text-xl text-gray-500 leading-7 '> <br />{job.educational_requirements}</span></p>
                    <p className='mt-3 leading-8'><span className='font-bold text-xl'>Experiences:</span> <span className='text-xl text-gray-500 leading-7 '> <br />{job.experiences}</span></p>

                </div>
                <div className='flex flex-1 flex-col justify-center items-center'>
                    <div className='ml-10 w-1/2 max-md:w-full max-md:h-full bg-slate-200 rounded-md border-2 h-3/4 flex justify-center items-center '>
                        <button onClick={notify} className=' w-40 h-14  bg-gradient-to-r from-teal-400 rounded-full to-blue-500 text-center text-2xl font-bold'>Apply Now</button>
                    </div>

                </div>

            </div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
                transition:Bounce
            />
        </div>
    );
};

export default JobDetails;
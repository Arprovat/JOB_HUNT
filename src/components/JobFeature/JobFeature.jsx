import React, { useEffect, useState } from 'react';
import axios from 'axios';
import JobCard from '../JobCard/JobCard';
const JobFeature = () => {
    const [jobs, setjobs] = useState([]);
    const [length,setlength]=useState(4);
    const [toggled,settoggled]= useState(true);
    useEffect(() => {
        axios.get('jobs.json')
            .then(res => setjobs(res.data))

    })
    const haandleSeeAll=()=>
    {
        settoggled(!toggled);
        if(!toggled){
            setlength(6)
        }
        else{
            setlength(4)
        }


    }
    return (
        <div>
            <h1 className='text-center text-4xl font-bold'>Featured Jobs</h1>
            <p className='mt-3 text-center text-gray-700'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='mt-6 grid grid-cols-2 max-md:grid-cols-1 gap-10'>
                {
                    jobs.slice(0,length).map(job => <JobCard key={job.id} job={job}></JobCard>)
                }
            </div>
            <div className='flex justify-center items-center mb-6'>
                <button onClick={haandleSeeAll} className='mt-6  bg-gradient-to-r from-teal-400 via-indigo-500 to-blue-500 text-center text-xl font-bold w-40 h-10 rounded-lg active:bottom-2 active:border-slate-700 '>{toggled ? 'See all ':'Back'}</button>
            </div>
        </div>
    );
};

export default JobFeature;
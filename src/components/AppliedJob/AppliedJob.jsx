import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getJobApplication } from '../../utility/LocalStore/LocalStore';
import JobCard from '../JobCard/JobCard';

const AppliedJob = () => {
    const [jobsData,setjobsData]=useState([])
    const jobs = useLoaderData();
    useEffect(() => {
        const StoredJob = getJobApplication();
        if (jobs.length > 0) {
        const JobsApplied = jobs.filter(job => StoredJob.includes(job.id) );
        setjobsData(JobsApplied);
        }
    },[])

    return (
        <div>
            <h1>hhh{jobsData.length}</h1>

        </div>
    );
};

export default AppliedJob;
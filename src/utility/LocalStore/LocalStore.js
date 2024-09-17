const getJobApplication =()=>{
    const storedjobapplicaton = localStorage.getItem('job_application');
    if(storedjobapplicaton){
        return JSON.parse(storedjobapplicaton);
    }
    return [];
}

const SaveJobApplication = id =>{
const storedjobapplicatons =getJobApplication();
const existingjob = storedjobapplicatons.find(jobId => jobId === id);
if(!existingjob){
    storedjobapplicatons.push(id);
    localStorage.setItem('job_application', JSON.stringify(storedjobapplicatons));

}


}
export {SaveJobApplication ,getJobApplication}
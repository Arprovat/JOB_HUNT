import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter,RouterProvider }  from 'react-router-dom'
import Root from './components/Root/Root.jsx'
import Hero from './components/Hero/Hero.jsx'
import JobType from './components/JobType/JobType.jsx'
import LandingPage from './components/LandingPage/LandingPage.jsx'
import JobDetails from './components/JobDetails/JobDetails.jsx'
import AppliedJob from './components/AppliedJob/AppliedJob.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<Root></Root>,
    children:
    [
      {
        path:'/',
        element:<LandingPage></LandingPage>
      },
      {
        path:'/applied',
        element:<AppliedJob></AppliedJob>,
        loader:()=> fetch('jobs.json')
      },
      {
        path:'jobDetails/:id',
        element:<JobDetails></JobDetails>,
        loader:()=> fetch('jobs.json')
      }
      
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)

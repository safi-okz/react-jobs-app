import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import HomePages from './pages/HomePages';
import MainLayout from './Layout/MainLayout';
import JobsPage from './pages/JobsPage';
import JobPage, { jobLoader } from './pages/JobPage';
import AddJobPage from './pages/AddJobPage';
import EditJobPage from './pages/EditJobPage';
import NotFound from './pages/NotFound';

// const addJob = (addJob) => {
//   console.log('new job submit ', addJob);
// }

// const router = createBrowserRouter(
//   createRoutesFromElements(
//       <Route path='/' element={<MainLayout />}>
//         <Route index element={<HomePages />} />
//         <Route path="/jobs" element={<JobsPage />} />
//         <Route path="/add-job" element={<AddJobPage addJobSubmit={addJob} />} />
//         <Route path="/jobs/:id" element={<JobPage />} loader={ jobLoader } />
//         <Route path="*" element={<NotFound />} />
//       </Route>
//   )
// )

const App = () => {

  // Add new Job
  const addJob = async (addJob) => {
    console.log('new job submit ', addJob);

    const res = await fetch('/api/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/josn'
      },
      body: JSON.stringify(addJob)
    });

    console.log('job submited ', res);
  }

  // Delete Job
  const deleteJob = async (id) => {
    const res = await fetch(`/api/jobs/${id}`, {
      method: 'DELETE'
    });

    console.log('job deleted ', res);
  }

  const updateJob = async (job) => {
    const res = await fetch(`/api/jobs/${job.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(job),
    });
    return;
  };
  
  const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<MainLayout />}>
          <Route index element={<HomePages />} />
          <Route path="/jobs" element={<JobsPage />} />
          <Route path="/add-job" element={<AddJobPage addJobSubmit={addJob} />} />
          <Route path="/jobs/:id" element={<JobPage deleteJob={ deleteJob } />} loader={ jobLoader } />
          <Route path="/jobs/edit/:id" element={<EditJobPage updateJobSubmit={updateJob} />} loader={ jobLoader } />
          <Route path="*" element={<NotFound />} />
        </Route>
    )
  )


  return <RouterProvider router={router} />
  
}

export default App
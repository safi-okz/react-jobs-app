import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import HomePages from './pages/HomePages';
import MainLayout from './Layout/MainLayout';
import JobsPage from './pages/JobsPage';
import JobPage, { jobLoader } from './pages/JobPage';
import AddJobPage from './pages/AddJobPage';
import NotFound from './pages/NotFound';

const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<HomePages />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/add-job" element={<AddJobPage />} />
        <Route path="/jobs/:id" element={<JobPage />} loader={ jobLoader } />
        <Route path="*" element={<NotFound />} />
      </Route>
  )
)

const App = () => {
  return <RouterProvider router={router} />
  
}

export default App
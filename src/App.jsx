import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import HomePages from './pages/HomePages';
import MainLayout from './Layout/MainLayout';
import JobsPage from './pages/JobsPage';
import JobPage from './pages/JobPage';
import NotFound from './pages/NotFound';

const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<HomePages />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/jobs/:id" element={<JobPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
  )
)

const App = () => {
  return <RouterProvider router={router} />
  
}

export default App
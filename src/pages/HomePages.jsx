// import Navbar from "../components/Navbar";
import Hero from '../components/Hero';
import HomeCards from '../components/HomeCards';
import JobListings from "../components/JobListings";
import ViewAllJobs from "../components/ViewAllJobs";

const HomePages = () => {
  return (
        <>
            {/* <Navbar /> */}
            <Hero />
            <HomeCards />
            <JobListings isHome={true} />
            <ViewAllJobs />
        </>
  )
}

export default HomePages
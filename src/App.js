import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import "./App.css";
import { lazy, Suspense } from "react";
import Navbar from "./components/common/Navbar";
import VerifyEmail from "./pages/Auth/VerifyEmail";
import AboutPage from "./pages/AboutPage/AboutPage";
import PrivateRoute from './components/common/PrivateRoute';
import Dashboard from "./pages/Dashboard/Dashboard";
import MyProfile from './pages/Dashboard/MyProfile';
import Error from './pages/Error/Error';
import MyCourse from "./pages/Dashboard/MyCourse";
import Catalog from "./pages/Catalog";
import AddCourse from "./components/core/AddCourse";
import CoursePageDetails from "./pages/Course/CoursePageDetails";
import Contact from "./pages/ContactLear/Contact";
const Login = lazy(()=>import("./pages/Auth/Login"));
const HomePage = lazy(()=>import("./pages/Homepage/HomePage"));
const Signup = lazy(()=>import("./pages/Auth/Signup"));




function App() {

  // const {pathname} = useLocation();
  // console.log("location of path is",pathname);

  

  return (
    <div className="flex flex-col font-inter bg-richblack-900 w-screen min-h-screen">
      <Navbar />


      <Routes>
        <Route path="/" element={<Suspense fallback="loading..." >
          <HomePage />
        </Suspense>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/catalog/:catalogName" element={<Catalog />} />
        <Route path="/course/:courseId" element={<CoursePageDetails />} />

        {/* privateRoutes */}
        <Route element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }>
          {/* route for all loggedin users */}
          <Route path="dashboard/my-profile" element={<MyProfile />} />
          <Route path="dashboard/add-course" element={<AddCourse />} />
          <Route path="dashboard/my-courses" element={<MyCourse />} />
        </Route>

        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;

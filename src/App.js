import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/Homepage/HomePage";
import Signup from "./pages/Auth/Signup";
import Login from "./pages/Auth/Login";
import Navbar from "./components/common/Navbar";
import VerifyEmail from "./pages/Auth/VerifyEmail";
import AboutPage from "./pages/AboutPage/AboutPage";
import PrivateRoute from './components/common/PrivateRoute';
import Dashboard from "./pages/Dashboard/Dashboard";
import MyProfile from './pages/Dashboard/MyProfile';


function App() {
  return (
    <div className="flex flex-col font-inter bg-richblack-900 w-screen min-h-screen">
      <Navbar />


      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
        <Route path="/about" element={<AboutPage />} />

        {/* privateRoutes */}
        <Route element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }>
          {/* route for all loggedin users */}
          <Route path="/dashboard/my-profile" element={<MyProfile />} />
        </Route>

      </Routes>
    </div>
  );
}

export default App;

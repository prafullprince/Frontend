import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/Homepage/HomePage";
import Signup from "./pages/Auth/Signup";
import Login from "./pages/Auth/Login";
import Navbar from "./components/common/Navbar";
import VerifyEmail from "./pages/Auth/VerifyEmail";


function App() {
  return (
    <div className="flex flex-col font-inter bg-richblack-900 w-screen min-h-screen">
      <Navbar />



      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
      </Routes>
    </div>
  );
}

export default App;

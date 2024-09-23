import React from "react";
import { Link } from "react-router-dom";

const Button = ({children,linkto,active}) => {
  return (
    <Link to={linkto}>
      <div className={`text-center flex items-center gap-2 text-[15px] px-6 py-3 rounded-md font-bold ${active ? "text-black bg-yellow-50" : "bg-richblack-800"} hover:scale-95 transition-all duration-200 shadow-inner`}>
        {children}
      </div>
    </Link>
  );
};

export default Button;

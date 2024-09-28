import React from "react";
import * as Icons from "react-icons/vsc";
import { Link, matchPath, useLocation } from "react-router-dom";

const SidebarLink = ({ name,paths,iconName }) => {
  const Icon = Icons[iconName];
  const location = useLocation();

  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname);
  };

  return (
    <div>
      <Link to={paths}>
        <div className={`flex text-richblack-300 gap-x-3 items-center text-md px-6 font-inter font-medium py-2 justify-start
                        ${matchRoute(paths) ? "bg-[#3D2A01] text-[#fddb32] border-l-[2px] px-[22px] border-l-yellow-5" : "text-[#838894]"} `}>
          {/* icon */}
          <Icon />
          {/* name */}
          <p>{name}</p>
        </div>
      </Link>
    </div>
  );
};

export default SidebarLink;

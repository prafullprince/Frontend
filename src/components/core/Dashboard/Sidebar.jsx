import React, { useState } from "react";
import { sidebarLinks } from "../../../data/dashboard-links";
import { logout } from "../../../services/connectionLogic";
import { useDispatch, useSelector } from "react-redux";
import SidebarLink from "./SidebarLink";
import { useNavigate } from "react-router-dom";
import { VscSignOut } from "react-icons/vsc"
import ConfirmationModal from "../../common/ConfirmationModal";

const Sidebar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.profile);
  const [confirmationModal,setConfirmationModal] = useState(null);

  return (
    <div className="flex h-[calc(100vh-3.5rem)] min-w-[225px] flex-col border-r-[1px] border-r-richblack-700 bg-richblack-800 py-10 gap-6">
      {/* sidebar links */}
      <div className={`flex flex-col ${confirmationModal ? "bg-opacity-20" : ""}`}>
        {sidebarLinks.map((sidebarLink) => {
          if (sidebarLink.type && user?.accountType !== sidebarLink.type) {
            return null;
          } else {
            return (
              <SidebarLink
                key={sidebarLink.id}
                name={sidebarLink.name}
                paths={sidebarLink.path}
                type={sidebarLink.type}
                iconName={sidebarLink.icon}
              />
            );
          }
        })}
      </div>
      {/* horrizontal line */}
      <div className="bg-[#424854] h-[1px] w-[80%] mx-auto"></div>
      {/* settings and logout */}
      <div className="fle flex-col items-center justify-center">
        <div className="flex gap-x-3 text-lg items-center px-6 py-2 text-[#838894]">
          <VscSignOut />  
          <button onClick={() => setConfirmationModal({
            text1:"Are you sure ?",
            text2:"You will be loggedOut",
            btn1Text:"Logout",
            btn2Text:"Cancel",
            btn1Handler: () => dispatch(logout(navigate)),
            btn2Handler: () => setConfirmationModal(null) 
          }) }>Logout</button>
        </div>
      </div>
        {
            confirmationModal && <ConfirmationModal modalData={confirmationModal} />
        }
    </div>
  );
};

export default Sidebar;

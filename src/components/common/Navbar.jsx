import React, { useEffect, useState } from "react";
import { Link, matchPath, useLocation } from "react-router-dom";
import logo from "../../assets/Logo/Logo-Full-Light.png";
import { NavbarLinks } from "../../data/navbar-links";
import { useSelector } from "react-redux";
import { ACCOUNT_TYPE } from "../../utills/constants";
// import { AiOutlineShopping } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import ProfileDropDown from "../core/Auth/ProfileDropDown";
import { apiConnector } from "../../services/apiConnector";
import { categories } from "../../services/api";
import { IoIosArrowDropdown } from "react-icons/io";



const Navbar = () => {
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);
  const { totalItems } = useSelector((state) => state.cart);

  const location = useLocation();
  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname);
  };

  // api call
  const [subLinks, setSubLinks] = useState([]);

  async function fetchCategories() {
    try {
        // api call
        const result = await apiConnector("GET",categories.SHOW_ALL_CATEGORIES);
        console.log(result);
        const dataArray = result.data.response;
        console.log(dataArray);
        setSubLinks(dataArray);

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    fetchCategories();
  },[])

  return (
    <div className="flex h-14 items-center justify-center shadow-2xl bg-richblack-900 border-b border-richblack-700">
      <div className="w-11/12 max-w-6xl flex items-center justify-between mx-auto">
        {/* logo */}
        <Link to={"/"}>
          <img src={logo} alt="logo" width={160} height={42} loading="lazy" />
        </Link>
        {/* navbar links */}
        <nav>
          <ul className="flex gap-x-6 text-richblack-25">
            {NavbarLinks.map((link, index) => (
              <li key={index}>
                {link.title === "Catalog" ? (
                  <div className="px-2 py-1 transition-all duration-200 hover:shadow-sm hover:shadow-blue-100 flex gap-1 items-center relative group">
                    <p>{link.title}</p>
                    <IoIosArrowDropdown />
                    {/* hover container */}
                    <div className="invisible absolute left-[50%] top-[50%] z-[1000] flex w-[200px] translate-x-[-50%] translate-y-[3em] flex-col gap-2 rounded-lg bg-richblack-5 p-4 text-richblack-900 opacity-0 transition-all duration-150 group-hover:visible group-hover:translate-y-[1.65em] group-hover:opacity-100 lg:w-[200px]">
                      <div className="absolute left-[50%] top-0 -z-10 h-6 w-6 translate-x-[80%] translate-y-[-40%] rotate-45 select-none rounded bg-richblack-5"></div>
                      {/* now set all values */}
                      {
                        subLinks.length > 0 ? (
                          subLinks.map(
                            (category,index)=>(
                              <Link to={`/catalog/${category.name.split(" ").join("-").toLowerCase()}`} className="border rounded-lg px-4 py-1" key={index}>
                                {category.name}
                              </Link>
                            )
                          )
                        ) : (<div>Categories not found</div>)
                      }
                    </div>
                  </div>
                ) : (
                  <Link to={link?.path}>
                    <p
                      className={`${
                        matchRoute(link?.path)
                          ? "text-yellow-25 shadow-md shadow-white"
                          : "text-white hover:shadow-sm hover:shadow-blue-100 transition-all duration-200"
                      } px-2 py-1 transition-all duration-200`}
                    >
                      {link.title}
                    </p>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
        {/* buttons = login,signup,profile,dashboard,cart,search etc */}
        <div className="flex gap-x-4 items-center">
          {/* when user loggedIn as Student */}
          {user && user?.accountType !== ACCOUNT_TYPE.INSTRUCTOR && (
            <Link to={"/dashboard/cart"} className="relative">
              <AiOutlineShoppingCart />
              {totalItems > 0 && <span className="absolute">{totalItems}</span>}
            </Link>
          )}
          {/* when user is not loggedIn */}
          {token === null && (
            <Link
              className="text-white border rounded-lg px-3 py-1 border-richblack-400 shadow-sm shadow-caribbeangreen-25 translate-all duration-200 hover:scale-95 font-semibold"
              to={"/login"}
            >
              <button>Log in</button>
            </Link>
          )}
          {token === null && (
            <Link
              className="text-white border rounded-lg px-3 py-1 border-richblack-400 shadow-sm shadow-caribbeangreen-25 translate-all duration-200 hover:scale-95 font-semibold"
              to={"/signup"}
            >
              <button>Sign up</button>
            </Link>
          )}
          {/* if any user present */}
          {token !== null && <ProfileDropDown />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

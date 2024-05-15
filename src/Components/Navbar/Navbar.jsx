import { useContext, useEffect, useState } from "react";
import {  NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {

  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState();
  // console.log(currentUser);
  const { user, logOut } = useContext(AuthContext);
  console.log(user);
  useEffect(() => {
    if (user) {
      setCurrentUser(user);
    }
  }, [user]);
  const handleSignOut = () => {
    logOut()
      .then((result) => {
        navigate(location?.state ? location.state : "/");
        console.log(result);
        Swal.fire({
          icon: "success",
          title: "Yeah....",
          text: "Please try another!",
        });
       
        
      })
      .catch((error) => console.error(error));
  };
  console.log(currentUser);
  const NavLinks = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-orange-600 font-bold border-b-4 border-orange-500 mr-4 pb-1"
              : "text-black mr-4"
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-orange-600 font-bold border-b-4 border-orange-500 mr-4 pb-1"
              : "text-black mr-4"
          }
          to="available"
        >
          Available Food
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-orange-600 font-bold border-b-4 border-orange-500 mr-4 pb-1"
              : "text-black mr-4"
          }
          to="addfood"
        >
          Add Food
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-orange-600 font-bold border-b-4 border-orange-500 mr-4 pb-1"
              : "text-black mr-4"
          }
          to="myfood"
        >
          My Foods
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-orange-600 font-bold border-b-4 border-orange-500 mr-4 pb-1"
              : "text-black mr-4"
          }
          to="request"
        >
          Request Food
        </NavLink>
      </li>
    </>
  );
  return (
    <div
      className={`navbar bg-gradient-to-r from-purple-600 via-pink-400 to-red-400 rounded-lg p-6 font-montserrat`}
    >
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {NavLinks}
          </ul>
        </div>
       <div className="flex">
        <img className="w-[60px]" src="https://i.ibb.co/k0fcN1G/7803017.jpg" alt="" />
       <a className="btn btn-ghost text-3xl text-red-500">NourishNet</a>
       </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{NavLinks}</ul>
      </div>

      <div className="navbar-end">
        {currentUser ? (
          <>
            <div>
              <button
                onClick={handleSignOut}
                className="btn btn-secondary bg-orange-600"
              >
                Sign Out
              </button>
            </div>
          </>
        ) : (
          <>
            <div>
              <NavLink to="/login">
                <button className="btn mr-2 btn-secondary bg-orange-700">
                  Login
                </button>
              </NavLink>
              <NavLink to="/register">
                <button className="btn mr-2 btn-secondary bg-orange-700">
                  Register
                </button>
              </NavLink>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;

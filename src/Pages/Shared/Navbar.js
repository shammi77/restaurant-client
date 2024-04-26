import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const menuItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/menu">Menu</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100 bg-primary">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabindex="0" role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mt-30"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabindex="0"
              className="menu menu-sm dropdown-content mt-10 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menuItems}
            </ul>
          </div>
          <Link className="btn btn-primary text-3xl mt-10 ml-20">Restaurant Name</Link>
        </div>
        <div className="mt-10 navbar-center hidden lg:flex bg-secondary">
          <ul className="menu menu-horizontal px-1 ">
            {menuItems}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
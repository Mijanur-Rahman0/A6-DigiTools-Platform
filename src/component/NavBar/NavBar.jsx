import { ShoppingCart } from "lucide-react";
import React from "react";

const navLists = [
    { "name": "Products"},
    { "name": "Features"},
    { "name": "Pricing"},
    { "name": "Testimonials"},
    { "name": "FAQ"}
]

const NavBar = () => {
  return (
    <div className="navbar bg-white text-black shadow-sm">
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
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {/* <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
            <li>
              <a>Item 3</a>
            </li> */}
            {
            navLists.map((navList, index) => <li className="font-medium" key={index}><a href="">{navList.name}</a></li>)
          }
          </ul>
        </div>
        <a className="text-3xl font-bold bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">DigiTools</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {/* <li>
            <a>Item 1</a>
          </li>
          <li>
            <a>Item 2</a>
          </li>
          <li>
            <a>Item 3</a>
          </li> */}
          {
            navLists.map((navList, index) => <li className="mr-8 font-medium" key={index}><a href="">{navList.name}</a></li>)
          }
        </ul>
      </div>
      <div className="flex gap-4 navbar-end">
        <ShoppingCart></ShoppingCart>
        <button>Login</button>
        <a className="btn btn-primary rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA]">Get Started</a>
      </div>
    </div>
  );
};

export default NavBar;

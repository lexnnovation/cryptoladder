import React, { useState } from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className='rounded-container flex items-center justify-between h-20 font-bold'>
      <Link to='/'>
        <h1 className='text-xl p-4'>Crypto Ladder</h1>
      </Link>
      <div className='hidden md:block'>
        <Link to='/signin' className='p-4 hover:text-ascent'>
          Sign In
        </Link>
        <Link
          to='/signup'
          className='bg-button text-btnText px-6 py-2 ml-3 rounded-xl shadow-lg hover:shadow-xl'
        >
          Sign Up
        </Link>
      </div>
      <div className='hidden md:block p-4'>
        <ThemeToggle />
      </div>
      <div
        onClick={handleNav}
        className='block md:hidden cursor-pointer z-10 mr-4'
      >
        {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </div>
      {
        // Mobile Menu
      }
      <div
        className={
          nav
            ? "md:hidden fixed left-0 top-24 flex flex-col justify-between items-center w-full h-[85%] bg-primary ease-in duration-500 z-10 opacity-100"
            : "fixed left-[-100%] top-24 flex flex-col justify-between items-center w-full h-[85%] bg-primary ease-in duration-300 z-10 opacity-0"
        }
      >
        <ul className='w-full p-6'>
          <li className='border-b py-6'>
            <Link to='/'>Home</Link>
          </li>
          <li className='border-b py-6'>
            <Link to='/'>Account</Link>
          </li>
          <li className='py-6 -m-2'>
            <ThemeToggle />
          </li>
        </ul>
        <div className='flex flex-col p-4 w-full'>
          <Link to='/signin'>
            <button className='w-full my-2 p-3 bg-primary  border border-secondary rounded-2xl shadow-lg'>
              Sign In
            </button>
          </Link>
          <Link to='/signup'>
            <button className='w-full my-2 p-3 bg-button text-btnText border border-secondary rounded-2xl shadow-lg'>
              Sign up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

import React from "react";
import { MdEmail, MdLock } from "react-icons/md";
import { Link } from "react-router-dom";
const SignIn = () => {
  return (
    <div className='max-w-[400px] mx-auto min-h-[600px] px-4 py-20'>
      <div>
        <h1 className='font-bold text-center text-3xl'>Sign In</h1>
        <form>
          <div className='my-4'>
            <label className='pl-4'>Email</label>
            <div className='my-2 shadow-xl rounded-full w-full relative'>
              <input
                className='focus:outline-none placeholder:text-sm pl-4 p-2  w-full border bg-primary border-input rounded-full'
                type='email'
                placeholder='Enter email'
              />
              <MdEmail className='mr-4 absolute right-1 top-3 text-gray-400' />
            </div>
          </div>
          <div className='my-4'>
            <label className='pl-4'>Password</label>
            <div className='my-2 shadow-xl rounded-full w-full relative'>
              <input
                className='focus:outline-none pl-4  placeholder:text-sm p-2 w-full border bg-primary border-input rounded-full'
                type='password'
                placeholder='Enter password'
              />
              <MdLock className='mr-4 absolute right-1 top-3 text-gray-400' />
            </div>
          </div>
          <button
            className='mt-2 bg-button w-full rounded-full p-2 text-btnText'
            type='submit'
          >
            Sign In
          </button>
        </form>
        <p className='text-center my-4'>
          Don't have an account?
          <Link className='pl-2 text-ascent font-bold' to='/signup'>
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;

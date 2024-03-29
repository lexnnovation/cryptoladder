import React from "react";
import { FaFacebook, FaGithub, FaReddit, FaTwitter } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";

const Footer = () => {
  return (
    <div className='rounded-container my-4 py-4 text-primary'>
      <div className='grid grid-cols-2 mx-4'>
        <div className='flex justify-evenly w-full md:max-w-[300px]'>
          <div className='mr-4'>
            <h2 className='font-bold'>Support</h2>
            <ul>
              <li className='text-sm py-1'>Help Desk</li>
              <li className='text-sm py-1'>Contact Us</li>
              <li className='text-sm py-1'>Crypto</li>
              <li className='text-sm py-1'>Developers</li>
            </ul>
          </div>
          <div>
            <h2 className='font-bold'>Info</h2>
            <ul>
              <li className='text-sm py-1'>About Us</li>
              <li className='text-sm py-1'>Careers</li>
              <li className='text-sm py-1'>Buy Coins</li>
              <li className='text-sm py-1'>Terms and Conditions</li>
            </ul>
          </div>
        </div>
        <div className='text-right'>
          <div className='flex justify-end w-full'>
            <div className='w-full md:w-[400px] relative'>
              <p className='text-center md:text-right '>
                Get daily crypto news and updates
              </p>
              <div className='py-2'>
                <form>
                  <input
                    className='focus:placeholder:text-transparent md:pl-4 placeholder:text-sm focus:outline-none w-full border bg-primary border-input rounded-full mr-2 p-2  md:px-2 text-left shadow-lg md:w-auto '
                    type='email'
                    placeholder='Please enter your email'
                  />
                  <button className='bg-button text-btnText px-4 p-2 w-full rounded-full shadow-lg hover:shadow-xl md:w-auto my-2'>
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex justify-center   md:py-0 md:pb-1 mt-[-1rem]'>
        <ThemeToggle />
      </div>
      <div className='flex justify-center text-ascent py-2 gap-4 text-2xl'>
        <FaTwitter />
        <FaFacebook />
        <FaReddit />
        <FaGithub />
      </div>
      <p className='text-center '>Powered by CoinGecko API</p>
    </div>
  );
};

export default Footer;

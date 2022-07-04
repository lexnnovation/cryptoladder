import { Input } from "postcss";
import React from "react";
import { FaFacebook, FaGithub, FaReddit, FaTwitter } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";

const Footer = () => {
  return (
    <div>
      <div>
        <div>
          <div>
            <h2>Support</h2>
            <ul>
              <li>Help Center</li>
              <li>Contact Us</li>
              <li>Cryto Ladder</li>
              <li>Developers</li>
            </ul>
          </div>
          <div>
            <h2>Info</h2>
            <ul>
              <li>About Us</li>
              <li>Careers</li>
              <li>Buy Coins</li>
              <li>Terms and Conditions</li>
            </ul>
          </div>
        </div>
        <div>
          <div>
            <div>
              <div>
                <ThemeToggle />
              </div>
              <p>Get periodic crypto news news and updates</p>
              <div>
                <form>
                  <input type='text' placeholder='Please enter your email' />
                  <button>Subscribe</button>
                </form>
              </div>
              <div>
                <FaTwitter />
                <FaFacebook />
                <FaReddit />
                <FaGithub />
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className='text-center py-2'>Powered by CoinGecko API</p>
    </div>
  );
};

export default Footer;

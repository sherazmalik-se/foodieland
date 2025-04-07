import React, { useState } from 'react';
import foodielandSvg from '../assets/Foodieland.svg';
import facebookSvg from '../assets/001-facebook.svg';
import twitterSvg from '../assets/003-twitter.svg';
import instagramSvg from '../assets/004-instagram.svg';
import Checkbox from './Checkbox';

function Navbar() {
  const [showMobileNav, setShowMobileNav] = useState(false);

  return (
    <nav className="max-w-[1328px] mx-auto px-6 my-10 flex justify-between">
      <div className="logo cursor-pointer">
        <img src={foodielandSvg} alt="" className="w-auto h-[30px]" />
      </div>

      <ul className="hidden lg:flex gap-[60px] items-center">
        <li className="cursor-pointer">Home</li>
        <li className="cursor-pointer">Recipes</li>
        <li className="cursor-pointer">Blog</li>
        <li className="cursor-pointer">Contact</li>
        <li className="cursor-pointer">About Us</li>
      </ul>

      <ul className="hidden lg:flex gap-10 items-center">
        <li className="cursor-pointer">
          <img src={facebookSvg} alt="Facebook App Icon" className="w-full" />
        </li>
        <li className="cursor-pointer">
          <img src={twitterSvg} alt="Twitter App Icon" className="w-full" />
        </li>
        <li className="cursor-pointer">
          <img src={instagramSvg} alt="Instagram App Icon" className="w-full" />
        </li>
      </ul>

      <div className="block lg:hidden">
        <Checkbox
          showMobileNav={showMobileNav}
          setShowMobileNav={setShowMobileNav}
        />
      </div>

      {showMobileNav && (
        <div className="nav-for-mobile fixed top-0 left-0 w-1/2 h-full bg-[#000000e6] text-white overflow-y-scroll z-10">
          <ul className="h-full flex flex-col gap-7 items-center justify-center py-6">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">Recipes</li>
            <li className="cursor-pointer">Blog</li>
            <li className="cursor-pointer">Contact</li>
            <li className="cursor-pointer">About Us</li>
            <li>
              <div className="flex gap-10 items-center">
                <span className="cursor-pointer">
                  <img
                    src={facebookSvg}
                    alt="Facebook App Icon"
                    className="w-full brightness-100 invert"
                  />
                </span>
                <span className="cursor-pointer">
                  <img
                    src={twitterSvg}
                    alt="Twitter App Icon"
                    className="w-full brightness-100 invert"
                  />
                </span>
                <span className="cursor-pointer">
                  <img
                    src={instagramSvg}
                    alt="Instagram App Icon"
                    className="w-full brightness-100 invert"
                  />
                </span>
              </div>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

import React from 'react';
import foodielandSvg from '../assets/Foodieland.svg';
import vector1Svg from '../assets/Vector1.svg';

function Footer() {
  return (
    <footer className="max-w-[1328px] mx-auto px-6 mb-12 mt-40">
      <div className="flex flex-col gap-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-15 items-center">
          <div className="grid gap-4">
            <img src={foodielandSvg} alt="Foodieland." className="w-27.5" />

            <p className="text-[#00000099]">
              Lorem ipsum dolor sit amet, consectetuipisicing elit,{' '}
            </p>
          </div>

          <ul className="justify-self-center lg:justify-self-end flex gap-5 sm:gap-15 font-medium">
            <li className="cursor-pointer">Recipes</li>
            <li className="cursor-pointer">Blog</li>
            <li className="cursor-pointer">Contact</li>
            <li className="cursor-pointer">About us</li>
          </ul>
        </div>

        <img src={vector1Svg} alt="gray line" className="w-full h-full" />

        <p className="text-lg font-medium text-[#00000099] text-center text-sm">
          Developed by{' '}
          <a
            href="https://sheraz-ahmad-portfolio.vercel.app"
            className="text-[#FF7967]"
          >
            Sheraz Ahmad
          </a>
          &nbsp;& Designed by flowbase.co
        </p>
      </div>
    </footer>
  );
}

export default Footer;

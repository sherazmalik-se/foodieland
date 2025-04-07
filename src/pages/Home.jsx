import React from 'react';
import NewsLetter from '../components/NewsLetter';
import deliciousRecipeObj from '../lib/constants/deliciousRecipeObj.js';
import simpleRecipeObj from '../lib/constants/simpleRecipeObj.js';
import InstagramSec from '../components/InstagramSec.jsx';
import Categories from '../components/Categories.jsx';

import vector2Svg from '../assets/Vector2.svg';
import timerSvg from '../assets/Timer.svg';
import forkKnifeSvg from '../assets/ForkKnife.svg';
import playCircleSvg from '../assets/PlayCircle.svg';
import badgeSvg from '../assets/Badge.svg';
import image14Svg from '../assets/image14.svg';
import ellipse2Png from '../assets/Ellipse2.png';
import LearnMore from '../assets/LearnMore.png';
import MaskGroup1 from '../assets/MaskGroup1.png';
import Layer from '../assets/Layer11.png';

function Home() {
  return (
    <>
      <header>
        <img
          src={vector2Svg}
          alt="navigation & hero dividing vector"
          className="w-full"
        />

        <div className="max-w-[1328px] mx-auto mt-10 px-6 grid md:grid-cols-2">
          <div className="bg-[#E7FAFE] rounded-3xl sm:rounded-[2.5rem] sm:rounded-e-none bg-no-repeat p-4 sm:p-6 xl:p-12.5">
            <button className="cursor-pointer rounded-full bg-[#fff] px-5 py-[10px] flex gap-[13px]">
              <img src={image14Svg} alt="Recipes" className="h-6" />

              <span className="font-medium">Hot Recipes</span>
            </button>

            <h1 className="my-6 lg:mt-8 lg:mb-6 text-3xl lg:text-5xl xl:text-[4rem] font-semibold tracking-[-0.10rem] lg:leading-[76px] lg:pr-6 xl:pr-0">
              Spicy delicious chicken wings
            </h1>
            <p className="leading-7">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              fugiat incidunt facilis a tempore eos.
            </p>

            <div className="my-8 lg:mt-7.5 lg:mb-25 flex gap-2 sm:gap-4 text-[#00000099]">
              <button className="cursor-pointer py-2 px-3 sm:px-4 rounded-full bg-[#0000000d] flex gap-[10px] items-center">
                <img src={timerSvg} alt="icon representing a clock" />

                <span className="text-sm font-medium">30 Minutes</span>
              </button>

              <button className="cursor-pointer py-2 px-3 sm:px-4 rounded-full bg-[#0000000d] flex gap-[10px] items-center">
                <img src={forkKnifeSvg} alt="a fork & knife icon" />

                <span className="text-sm font-medium">Chicken</span>
              </button>
            </div>

            <div className="flex flex-col lg:flex-row justify-between items-start gap-6">
              <div className="flex gap-4">
                <div className="w-[50px] h-[50px] rounded-full overflow-hidden">
                  <img
                    src={ellipse2Png}
                    alt="John Smith's DP"
                    className="w-full h-full rounded-full"
                  />
                </div>

                <div className="flex flex-col justify-center gap-2">
                  <span className="font-bold">John Smith</span>
                  <span className="font-medium text-sm text-[#00000099]">
                    15 March 2022
                  </span>
                </div>
              </div>

              <button className="cursor-pointer py-2.5 px-4 lg:py-[18px] lg:px-9 rounded-lg lg:rounded-2xl bg-[#000] flex gap-4 items-center">
                <span className="text-sm font-semibold text-white">
                  View Recipes
                </span>

                <img src={playCircleSvg} alt="" />
              </button>
            </div>
          </div>

          <div className="relative bg-[url(../assets/MaskGroup1.png)] bg-no-repeat bg-cover bg-center rounded-e-[40px] drop-shadow-[0px_4px_4px_#00000040] hidden md:block">
            <img
              src={badgeSvg}
              alt=""
              className="absolute top-[50px] -left-[50px] w-[150px] h-[150px]"
            />
          </div>
        </div>
      </header>

      <main className="mt-40">
        <div className="max-w-[1328px] mx-auto px-6">
          <Categories />

          <div className="mt-[183px]">
            <div>
              <h1 className="font-semibold text-3xl lg:text-5xl text-center">
                Simple and tasty recipes
              </h1>

              <p className="mt-6 text-[#00000099] max-w-[706px] mx-auto text-center">
                Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqut enim
                ad minim{' '}
              </p>
            </div>

            <div className="mt-24 flex flex-wrap justify-center lg:grid lg:grid-cols-3 gap-10">
              {simpleRecipeObj.map((simpleRecipeItem, index) => {
                return (
                  <div
                    key={index}
                    className="cursor-pointer basis-80 grow max-w-100 bg-linear-to-b from-[#E7F9FD00] to-[#E7F9FD] p-4 rounded-[30px]"
                  >
                    <img
                      src={simpleRecipeItem.img}
                      alt={`an image of ${simpleRecipeItem.title}`}
                      className="rounded-[30px]"
                    />

                    <div className="px-2">
                      <p className="py-6 text-lg sm:text-2xl font-semibold">
                        {simpleRecipeItem.title}
                      </p>

                      <div className="pb-4 flex gap-4 text-[#00000099] text-sm">
                        <div className="flex gap-[10px] items-center">
                          <img src={timerSvg} alt="icon representing a clock" />

                          <span className="text-sm font-medium">
                            {simpleRecipeItem.time}
                          </span>
                        </div>

                        <div className="flex gap-[10px] items-center">
                          <img src={forkKnifeSvg} alt="a fork & knife icon" />

                          <span className="text-sm font-medium">
                            {simpleRecipeItem.type}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-[143px] flex lg:grid lg:grid-cols-2 gap-11 items-center">
            <div>
              <h1 className="text-3xl lg:text-5xl font-semibold">
                Everyone can be a chef in their own kitchen
              </h1>

              <p className="text-[#00000099] mt-6 max-w-[508px] leading-7">
                Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqut enim
                ad minim{' '}
              </p>

              <button className="cursor-pointer rounded-2xl mt-6 lg:mt-18 px-8 py-3 lg:px-13 lg:py-5.5 bg-[#000000] text-white text-sm font-semibold">
                Learn More
              </button>
            </div>

            <div className="hidden sm:block">
              <img src={LearnMore} alt="" className="w-full" />
            </div>
          </div>
        </div>

        <InstagramSec />

        <div className="max-w-[1328px] mx-auto px-6">
          <div className="mt-20">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-25 items-center">
              <h1 className="text-3xl lg:text-5xl font-semibold">
                Try this delicious recipe to make your day
              </h1>

              <p className="text-[#00000099]">
                Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqut enim
                ad minim{' '}
              </p>
            </div>

            <div className="mt-20 flex gap-10 flex-wrap justify-evenly">
              {deliciousRecipeObj.map((RectangleItem, index) => {
                return (
                  <section className="basis-72.5 cursor-pointer" key={index}>
                    <div>
                      <img
                        src={RectangleItem.img}
                        alt={`an image of ${RectangleItem.title}`}
                        className="w-full rounded-[20px]"
                      />
                    </div>

                    <h1 className="mt-4 text-lg font-semibold">
                      {RectangleItem.title}
                    </h1>

                    <div className="mt-6 flex gap-6 text-[#00000099]">
                      <div className="flex gap-2 items-center">
                        <img src={timerSvg} alt="icon representing a clock" />

                        <span className="text-sm font-medium">
                          {RectangleItem.time}
                        </span>
                      </div>

                      <div className="flex gap-2 items-center">
                        <img src={forkKnifeSvg} alt="a fork & knife icon" />

                        <span className="text-sm font-medium">
                          {RectangleItem.type}
                        </span>
                      </div>
                    </div>
                  </section>
                );
              })}
            </div>
          </div>
        </div>

        <div className="max-w-[1328px] mx-auto px-6 mt-20">
          <h1 className="mb-20 text-5xl font-semibold text-center">
            Contact us
          </h1>
          <div className="flex gap-10 items-center lg:items-start">
            <div className="hidden sm:block basis-100 pl-7.5 pr-5 bg-linear-to-b from-[#E7F9FD00] to-[#E7F9FD] rounded-4xl">
              <img
                src={Layer}
                alt="Chef showing thumbs up"
                className="w-full"
              />
            </div>

            <div className="grow">
              <form action="#">
                <div className="grid lg:grid-cols-2 gap-10">
                  <div className="grid gap-3">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium text-[#00000099]"
                    >
                      NAME
                    </label>

                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="rounded-2xl border border-[#0000001a] py-4.5 px-5 placeholder:text-[#00000099]"
                      placeholder="Enter your name..."
                    />
                  </div>

                  <div className="grid gap-3">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-[#00000099]"
                    >
                      EMAIL ADDRESS
                    </label>

                    <input
                      type="text"
                      id="email"
                      name="email"
                      className="rounded-2xl border border-[#0000001a] py-4.5 px-5 placeholder:text-[#00000099]"
                      placeholder="Enter your email..."
                    />
                  </div>
                </div>

                <div className="my-6 grid lg:grid-cols-2 gap-10">
                  <div className="grid gap-3">
                    <label
                      htmlFor="subject"
                      className="text-sm font-medium text-[#00000099]"
                    >
                      SUBJECT
                    </label>

                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="rounded-2xl border border-[#0000001a] py-4.5 px-5 placeholder:text-[#00000099]"
                      placeholder="Enter your subject..."
                    />
                  </div>

                  <div className="grid gap-3">
                    <label
                      htmlFor="enquiry_type"
                      className="text-sm font-medium text-[#00000099]"
                    >
                      ENQUIREY TYPE
                    </label>

                    <select
                      name="enquiry_type"
                      id="enquiry_type"
                      className="rounded-2xl border border-[#0000001a] py-4.5 px-5 text-[#00000099]"
                    >
                      <option value="Advertising">Advertising</option>
                      <option value="Feedback">Feedback</option>
                      <option value="General Enquiry">General Enquiry</option>
                      <option value="Recipe Request">Recipe Request</option>
                      <option value="Partnership">Partnership</option>
                    </select>
                  </div>
                </div>

                <div className="grid gap-3 my-6">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-[#00000099]"
                  >
                    MESSAGE
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="rounded-2xl border border-[#0000001a] py-4.5 px-5 text-[#00000099] resize-none lg:h-50"
                    defaultValue="Enter your message..."
                  ></textarea>
                </div>

                <button className="cursor-pointer mt-12 rounded-2xl px-16 py-5 bg-black text-white">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>

        <NewsLetter />
      </main>
    </>
  );
}

export default Home;

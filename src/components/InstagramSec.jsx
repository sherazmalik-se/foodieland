import React from 'react';
import instaPostsObj from '../lib/constants/instaPostsObj.js';

import instaPostUser from '../assets/instaPostUser.svg';
import MoreIcon from '../assets/MoreIcon.svg';
import Like from '../assets/Like.svg';
import Comment from '../assets/Comment.svg';
import Messanger from '../assets/Messanger.svg';
import OvalBlue from '../assets/OvalBlue.svg';
import ovalGray from '../assets/ovalGray.svg';
import Save from '../assets/Save.svg';
import instaPostAvatar from '../assets/instaPostAvatar.svg';
import instagramIconWhite from '../assets/004-instagram-white.svg';

function InstagramSec() {
  return (
    <div className="max-w-[1328px] mx-auto px-6 py-20 mt-39.75 bg-linear-to-b from-[#E7F9FD00] to-[#E7F9FD]">
      <div>
        <h1 className="font-semibold text-3xl lg:text-5xl text-center">
          Check out @foodieland on Instagram
        </h1>

        <p className="mt-6 text-[#00000099] max-w-[706px] w-full mx-auto text-center">
          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqut enim ad minim{' '}
        </p>

        <div className="mt-20 grid grid-flow-col auto-cols-[18.125rem] gap-10 pb-2 overflow-x-scroll">
          {instaPostsObj.map((instaPostItem, index) => {
            return (
              <section key={index} className="bg-white cursor-pointer">
                <div className="flex justify-between items-center py-2.25 pl-2 pr-2.75">
                  <div className="flex gap-2">
                    <img
                      src={instaPostUser}
                      alt="Foodieland.'s profile picture"
                    />

                    <div className="flex flex-col">
                      <h1 className="font-semibold text-[10.05px]">
                        Foodieland.
                      </h1>

                      <span className="text-[8.51px]">Tokyo, Japan</span>
                    </div>
                  </div>

                  <img src={MoreIcon} alt="post settings" />
                </div>

                <div className="w-full">
                  <img
                    src={instaPostItem.img}
                    alt={`an instagram post with description ${instaPostItem.title}`}
                    className="w-full"
                  />
                </div>

                <div>
                  <div className="grid grid-cols-3 items-center ps-2.75 pe-3 pt-2.5">
                    <div className="flex gap-3.5 h-3.5">
                      <img src={Like} alt="like the post" />
                      <img src={Comment} alt="comment on post" />
                      <img src={Messanger} alt="message the user" />
                    </div>

                    <div className="justify-self-center flex">
                      <img src={OvalBlue} alt={`picture no ${index + 1}`} />
                      <img src={ovalGray} alt={`picture no ${index + 1}`} />
                      <img src={ovalGray} alt={`picture no ${index + 1}`} />
                    </div>

                    <img
                      src={Save}
                      alt="craig_love's profile picture"
                      className="justify-self-end h-4.5"
                    />
                  </div>

                  <div className="mt-2.5">
                    <div className="px-2.75 flex gap-1.25">
                      <img
                        src={instaPostAvatar}
                        alt="craig_love's profile picture"
                      />

                      <p className="text-[8.51px]">
                        Liked by{' '}
                        <span className="font-semibold text-[10.05px]">
                          craig_love
                        </span>
                        and{' '}
                        <span className="font-semibold text-[10.05px]">
                          44,486
                        </span>
                      </p>
                    </div>

                    <p className="px-2.75 pt-1 leading-3.5 text-[8.51px]">
                      <span className="font-semibold text-[10.05px]">
                        Foodieland.
                      </span>
                      {instaPostItem.title}
                    </p>

                    <span className="text-[8.51px] text-[#00000066] pl-2.75 py-2.5">
                      Septemter 19
                    </span>
                  </div>
                </div>
              </section>
            );
          })}
        </div>

        <button className="cursor-pointer rounded-2xl mt-20 px-8 py-4.75 bg-[#000000] text-white text-sm font-semibold flex gap-4 mx-auto">
          <span>Learn More</span>
          <img src={instagramIconWhite} alt="" className="w-5.5 h-5.5" />
        </button>
      </div>
    </div>
  );
}

export default InstagramSec;

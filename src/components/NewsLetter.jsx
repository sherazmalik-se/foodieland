import React from 'react';

function NewsLetter() {
  return (
    <div className="max-w-[1328px] mx-auto px-6">
      <div className="mt-20 rounded-3xl sm:rounded-[60px] bg-[url('../assets/Subscribe.png')] bg-no-repeat bg-cover bg-bottom lg:p-20 p-6 flex justify-center items-center">
        <section className="w-[620px] text-center">
          <h1 className="text-3xl lg:text-5xl font-semibold">
            Deliciousness to your inbox
          </h1>

          <p className="text-[#00000099] mt-6">
            Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqut enim ad minim{' '}
          </p>

          <form className="max-w-80 sm:max-w-120 mt-6 sm:mt-16 mx-auto">
            <div className="rounded-xl overflow-hidden relative">
              <input
                type="text"
                className="rounded-xl p-4 sm:p-8 pr-26 sm:pr-44 bg-white w-full text-sm font-semibold placeholder:text-[#00000099]"
                placeholder="Your email address..."
              />

              <button className="cursor-pointer text-sm font-semibold py-1.5 px-3.5 sm:py-5.25 sm:px-11.5 rounded-xl bg-[#000000] text-white absolute top-2.5 right-2.5">
                Subscribe
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
}

export default NewsLetter;

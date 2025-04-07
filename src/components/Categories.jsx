import React from 'react';
import image1 from '../assets/image1.svg';
import image2 from '../assets/image2.svg';
import image3 from '../assets/image3.svg';
import image4 from '../assets/image4.svg';
import image5 from '../assets/image5.svg';
import image6 from '../assets/image6.svg';

const categories = [
  {
    name: 'Breakfast',
    img: image1,
  },
  { name: 'Vegan', img: image2 },
  { name: 'Meat', img: image3 },
  { name: 'Dessert', img: image4 },
  { name: 'Lunch', img: image5 },
  { name: 'Chocolate', img: image6 },
];

/*************  ✨ Windsurf Command ⭐  *************/
/**
 * Renders a list of categories with their respective icons and names.
 *
 * @returns {React.ReactElement} A React component representing the categories
 * section.
 */
/*******  4e922a91-5291-4c50-934e-793ecedf7ad6  *******/
function Categories() {
  return (
    <>
      <div className="flex flex-col sm:flex-row sm:justify-between items-center gap-4">
        <h1 className="self-start sm:self-stretch text-3xl lg:text-5xl font-semibold">
          Categories
        </h1>

        <button className="cursor-pointer self-end sm:self-stretch px-4 py-3 sm:px-6.75 sm:py-5 font-semibold rounded-2xl bg-[#E7FAFE]">
          View All Categories
        </button>
      </div>

      <div className="mt-32.5 grid gap-10 gap-y-24 grid-cols-[repeat(auto-fit,minmax(180px,1fr))]">
        {
          /* Loop through the categories array and render each category */
          categories.map((category, index) => {
            return (
              <div
                key={index}
                className="cursor-pointer h-[152px] rounded-[30px] bg-linear-to-b from-[#70824600] to-[#6f81461a] flex justify-center items-end relative"
              >
                <img
                  src={category.img}
                  alt={category.name}
                  className="w-[100px] h-[100px] absolute -top-[50px] drop-shadow-[20px_20px_20px_#00000040]"
                />

                <p className="text-lg font-semibold py-[30px] pt-[50px]">
                  {category.name}
                </p>
              </div>
            );
          })
        }
      </div>
    </>
  );
}

export default Categories;

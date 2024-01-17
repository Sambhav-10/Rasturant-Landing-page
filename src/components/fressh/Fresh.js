import React from "react";

const Fresh = () => {
  return (
    <>
      <div className="text-center w-full h-[60vh] bg-[#F7F7F7] flex items-center">
        <div>
            <div className="flex justify-center">

          <h4 className="text-gray-600 font-bold mt-10 border-b-4
             border-[#C39D63]">ONLY THE BEST</h4>
            </div>

          <h1 className="text-6xl my-6">Fresh Ingredient, Tasty Meals</h1>
          <div className=" flex justify-center">
            <p className="w-1/2 text-gray-500">
              Discover new recipes, cooking techniques, and the nutritional
              benefits of incorporating these wholesome elements into your daily
              cuisine. Join us on a journey of flavor, health, and culinary
              inspiration. Let's savor the goodness of fresh ingredients
              together!
            </p>
          </div>
            <button className="p-2 mt-6 bg-[#C39D63]">VIEW ITEMS</button>
        </div>
      </div>
    </>
  );
};

export default Fresh;

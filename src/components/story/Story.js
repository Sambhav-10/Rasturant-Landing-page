import React from "react";

const Story = () => {
  return (
    <>
      <div className="w-full">
        <div className="flex justify-center">
          <div className="w-1/3 p-20 ">
            <p className="stext-gray-500 font-bold border-b-4
             border-[#C39D63]">OUR STORY</p>
            <h1 className="text-4xl mt-10">Welcome To Royal</h1>
            <p className="mt-10 text-gray-500">
              ﻿ Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit.
            </p>
            <p className="mt-10 text-gray-500"> doloremque laudantium, totam rem
              aperiam, eaque ipsa quae ab illo. Nemo enim ipsam voluptatem quia
              voluptas sit aspernatur aut odit aut fugit. Doloremque laudantium,
              totam rem aperiam, eaque ipsa quae ab illo. Sed ut perspiciatis
              unde omnis iste natus error sit voluptatem accusantium doloremque
              laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
              veritatis et quasi architecto.</p>
          </div>
          <div className="w-1/3 p-10 ">
            <img
              src="https://images.pexels.com/photos/5719907/pexels-photo-5719907.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Story;

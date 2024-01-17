import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between px-5 w-full h-20 items-center fixed bg-white">
        <div>
          <h1 className="text-2xl">Restaurant Landing Page</h1>
        </div>
        <div className="flex gap-2 list-none ">
          <li>Landing</li>
          <li>Home</li>
          <li>Gallery</li>
          <li>Shop</li>
          <li>Blog</li>
          <li>About</li>
          <li>Team</li>
          <li>Contact</li>
          <img src="" alt="shoping card" />
        </div>
      </div>
    </>
  );
};

export default Navbar;

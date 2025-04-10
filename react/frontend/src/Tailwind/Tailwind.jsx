import React from "react";

const Tailwind = () => {
  return (
    <div>
      <h1 className="text-center text-5xl italic font-bold">Hello class</h1>
      <p className="text-3xl leading-10 text-green-700 underline decoration-red-300 decoration-wavy uppercase">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At eum nemo
        omnis atque fugiat quo nulla illum id exercitationem voluptate.
      </p>

      <span className="bg-[url('./media/day 17.jpg')]  text-7xl font-bold border-8 rounded-lg border-red-700 border-double px-10 m-11">
        Lorem ipsum dolor sit amet.
      </span>

      <h5 className="text-8xl font-bold md:text-red-600 hover:text-green-700 hover:cursor-pointer">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse, sint.
      </h5>

      <div className="w-64 h-12 transition-all bg-green-700 hover:w-full hover:bg-red-700 hover:duration-1000"></div>
    </div>
  );
};

export default Tailwind;

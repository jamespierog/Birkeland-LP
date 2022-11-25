import React from "react";

const Button = ({style}) => (
  <div className={`relative xs:w-full lg:max-w-xs mx-auto lg:mx-0 ${style}`}>
    <input
      type="text"
      placeholder="Your E-mail Address"
      className="bg-primary lg:w-[400px] sm:pr-48 pl-8 p-4 sm:py-5 sm:w-[500px] rounded-full border-2 w-full font-medium focus:outline-none transition duration-300 border-gray-800 text-dimWhite  focus:border-gray-500 hover:border-gray-700"
    />
    <button
      type="button"
      className="w-48 xs:w-[160px] xs:text-[13px] absolute xs:right-0 lg:right-[-100px] top-0 bottom-0 bg-gray-800 p-6 text-gray-100 font-bold  rounded-full  flex items-center justify-center sm:leading-none focus:outline-none hover:bg-gray-700 transition duration-300 "
    >
      Get Early Access
    </button>
  </div>
);

export default Button;

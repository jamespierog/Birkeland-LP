import React from "react";

const Button = ({style}) => (
  <div className={`relative max-w-md text-center mx-auto lg:mx-0 ${style}`}>
    <input
      type="text"
      placeholder="Your E-mail Address"
      className="bg-primary sm:pr-48 pl-8 py-4 sm:py-5 rounded-full border-2 w-full font-medium focus:outline-none transition duration-300 border-gray-800 text-dimWhite  focus:border-gray-500 hover:border-gray-700"
    />
    <button
      type="button"
      className="w-full sm:absolute right-0 top-0 bottom-0 bg-gray-800 text-gray-100 font-bold mr-2 my-4 sm:my-2 rounded-full py-4 flex items-center justify-center sm:w-40 sm:leading-none focus:outline-none hover:bg-gray-700 transition duration-300 "
    >
      Get Early Access
    </button>
  </div>
);

export default Button;

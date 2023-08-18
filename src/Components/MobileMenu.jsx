import React, { useState } from "react";

const MobileMenu = () => {
  const [nav, setNav] = useState(false);
  return (
    <div className='z-[100]'>
      <div
        onClick={() => setNav(!nav)}
        className='relative z-[50] cursor-pointer space-y-1 pr-5'
      >
        <span
          className={`block h-1 w-8 rounded-xl bg-red-400 transition-all duration-300 ease-in-out ${
            nav ? "translate-y-2 -rotate-45" : ""
          }`}
        ></span>
        <span
          className={`block h-1 w-8 rounded-xl bg-red-400 transition-all duration-300 ease-in-out ${
            nav ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`block h-1 w-8 rounded-xl bg-red-400 transition-all duration-300 ease-in-out ${
            nav ? "-translate-y-2 rotate-45" : ""
          } `}
        ></span>
      </div>
      {/* bg-[#efeae6] */}
      <ul
        className={`absolute top-0 z-10 h-screen w-[50%] space-y-6 bg-black pt-[100px] text-center font-sans text-xl text-white shadow-xl drop-shadow-xl transition-all duration-300 ease-in-out  ${
          nav ? "right-0" : "-left-[100%]"
        }`}
      >
        <li>
          <a href=''>Features</a>
        </li>
        <li>
          <a href=''>Careers</a>
        </li>
        <li>
          <a href=''>Company</a>
        </li>
        <li>
          <a href=''>About</a>
        </li>
        <div className=''>
          <button className='mr-3 cursor-pointer py-2  px-6 text-mediumGray hover:text-white'>
            Login
          </button>
          <button className='rounded-xl border border-white py-2 px-6  text-white hover:scale-105'>
            Register
          </button>
        </div>
      </ul>
    </div>
  );
};

export default MobileMenu;

import React, { useState } from 'react'

const MobileMenu = () => {
    const [nav, setNav ] = useState(false)
  return (
    <div className='z-[100]'>
        <div 
        onClick={() => setNav(!nav)}
        className='space-y-1 relative z-[50] pr-5 cursor-pointer'>
            <span className={`w-8 h-1 bg-red-400 block ease-in-out duration-300 transition-all rounded-xl ${nav ? 'translate-y-2 -rotate-45' : ''}`}></span>
            <span className={`w-8 h-1 bg-red-400 block ease-in-out duration-300 transition-all rounded-xl ${ nav ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`w-8 h-1 bg-red-400 block ease-in-out duration-300 transition-all rounded-xl ${ nav ? '-translate-y-2 rotate-45' : ''} `}></span>
        </div>
        {/* bg-[#efeae6] */}
        <ul className={`absolute bg-black text-white pt-[100px] text-center top-0 z-10 w-[50%] h-screen space-y-6 text-xl font-sans ease-in-out duration-300 transition-all drop-shadow-xl shadow-xl  ${ nav ? 'right-0' : '-left-[100%]'}`}>
            <li ><a href="">Features</a></li>
            <li><a href="">Careers</a></li>
            <li><a href="">Company</a></li>
            <li><a href="">About</a></li>
            <div className="">
          <button className="mr-3 py-2 px-6  text-mediumGray cursor-pointer hover:text-white">
            Login
          </button>
          <button className="rounded-xl border border-white py-2 px-6  text-white hover:scale-105">
            Register
          </button>
        </div>
        </ul>
    </div>
  )
}

export default MobileMenu
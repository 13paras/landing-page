import React from "react";
import data from "../constants/data";

const Hero = () => {
  return (
    <main className='mx-10 mt-36 max-w-[1300px] lg:mx-auto'>
      <div className='-z-20 flex flex-col items-center justify-between space-x-10 lg:flex-row'>
        {/* Left Container */}
        <div className='order-2 mt-32 space-y-24 text-center lg:order-1 lg:mt-20 lg:w-[40%] lg:text-left'>
          <h1 className='text-7xl font-bold text-almostBlack'>
            Make <br /> remote work
          </h1>
          <p className='mx-auto w-[80%] text-xl font-semibold text-[#8c8c8c] lg:mx-0 lg:w-3/5'>
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </p>
          <button className='rounded-xl bg-almostBlack px-10 py-3 text-xl text-base-200'>
            Learn more
          </button>
          <div className='flex justify-center space-x-14'>
            <img
              src={data.clientAudiophile}
              className='object-contain'
              alt=''
            />
            <img src={data.clientDatabiz} alt='' className='object-contain' />
            <img src={data.clientMaker} alt='' className='object-contain' />
            <img src={data.clientMeet} alt='' className='object-contain' />
          </div>
        </div>
        {/* Right Container */}
        <div className='-z-[40] order-1 lg:order-2 lg:w-2/4'>
          <img src={data.desktopHero} alt='' className='h-[45rem] w-full' />
        </div>
      </div>
    </main>
  );
};

export default Hero;

import React from 'react'
import data from '../constants/data'

const Hero = () => {
  return (
    <main className='max-w-[1300px] lg:mx-auto mx-10 mt-36'>
        <div className='flex flex-col lg:flex-row space-x-10 justify-between items-center -z-20'>

        {/* Left Container */}
        <div className='lg:w-[40%] text-center lg:text-left space-y-24 lg:mt-20 mt-32 order-2 lg:order-1'>
        <h1 className="text-7xl font-bold text-almostBlack">
            Make <br /> remote work
        </h1>
        <p className='text-[#8c8c8c] text-xl font-semibold lg:w-3/5 w-[80%] mx-auto lg:mx-0'>Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</p>
        <button className="bg-almostBlack text-base-200 text-xl px-10 py-3 rounded-xl">Learn more</button>
        <div className='flex space-x-14 justify-center'>
            <img src={data.clientAudiophile} className='object-contain' alt="" />
            <img src={data.clientDatabiz} alt="" className='object-contain' />
            <img src={data.clientMaker} alt="" className='object-contain' />
            <img src={data.clientMeet} alt="" className='object-contain' />
        </div>
        </div>
        {/* Right Container */}
        <div className='lg:w-2/4 order-1 lg:order-2 -z-[40]'>
            <img src={data.desktopHero} alt="" className='w-full h-[45rem]' />
        </div>

        </div>
    </main>
  )
}

export default Hero
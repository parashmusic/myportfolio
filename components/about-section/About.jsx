'use client'
import React from 'react'
import { BentoGridDemo } from './Bento'

const About = () => {
  return (
    
    <div id='about' className='mx-2 mt-20 lg:mt-0'>
          {/* header */}
          <div className='mb-12'>
        <div className="flex justify-center ">
          <p className='uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-indigo-400 bg-clip-text text-transparent'>About me</p>
        </div>
        <h2 className='text-3xl font-bold md:text-5xl text-zinc-100 text-center mt-6'>A Sneak Peek Into My Life</h2>
        <p className='text-center text-white/60 mt-4 md:text-lg lg:text-xl max-w-md mx-auto'>Get to Know Me and What Drives Me</p>
      </div>
      {/* <BentoGridDemo/> */}
      <BentoGridDemo/>
      </div>
  )
}

export default About
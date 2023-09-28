'use client'

import React from 'react'
import Crafts from './Crafts'
import Carousel from './Carousel'

const Main = () => {

  return (
   <div className='min-h-full bg-black-'>
    <div className="relative h-[10vh] md:bg-center sm:bg-right bg-[600px] bg-cover flex items-center justify-center p-6 bg-black- text-white"></div>
       <Carousel/>
    <div className=" h-full bg-white flex relative">
        <Crafts />
    </div>
  </div>
    )
}

export default Main;

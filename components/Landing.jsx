import React from 'react';
import Image from "next/image";
import Link from 'next/link';

const Landing = () => {
    return (
        <section id="landing" className="relative h-[100vh] md:bg-center sm:bg-right bg-[600px] bg-cover flex items-center justify-center p-6 bg-[url('/assets/blacksmith1.jpg')]">
        <span id="blackOverlay" className="w-full h-full absolute opacity-30 md:opacity-20 bg-black"></span>
            <div id="landing-content" className='z-10 max-w-screen-lg lg:mr-80 flex items-center justify-center flex-col lg:flex-row '>
                <div id="landing-texts" className=' max-w-[650px] h-full break-words flex flex-col items-center justify-center lg:mr-24 sm:mr-0  lg:items-start md:items-center'>
                    <h1 className='text-h3  text-white font-semibold lg:text-h1 sm:text-center lg:text-left md:text-h2 '>Elevate your expertise with Craftsmith</h1>
                    <p className='text-white mt-4'>Craftsmith fosters a vibrant marketplace that connects artisans with a diverse clientele - where passion meets opportunity.</p>
                    <Link href="/"  className='button-hover active:scale-[0.9] mt-12 bg-white text-black- p-3 font-semibold rounded-md'>Get Started</Link>
                </div>

                {/* <Image
                    src="/assets/blacksmith1.png"
                    alt="worker"
                    width={450}
                    height={450}
                    className='rounded-md mt-8 lg:mt-0'
                /> */}
            </div>
        </section>
    );
}

export default Landing;
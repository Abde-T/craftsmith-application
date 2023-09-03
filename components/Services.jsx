import React from "react";
import BuildIcon from "@mui/icons-material/Build";
import SquareFootIcon from "@mui/icons-material/SquareFoot";
import HandymanIcon from "@mui/icons-material/Handyman";
const Services = () => {
  return (
    <section className="pb-10 -mt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
            <div className="relative flex flex-col min-w-0 break-words backdrop-blur-md w-full mb-8 shadow-3xl rounded-lg">
              <div className="px-4 py-8 flex-auto">
                <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-black-">
                  <SquareFootIcon />
                </div>
                <h6 className="text-xl font-semibold">lorem ipsum</h6>
                <p className="mt-2 mb-4 text-gray-600">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure
                  quod quasi, voluptatibus odit modi unde.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full md:w-4/12 px-4 text-center">
            <div className="relative flex flex-col min-w-0 break-words backdrop-blur-md w-full mb-8 shadow-3xl rounded-lg">
              <div className="px-4 py-8 flex-auto">
                <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-black-">
                  <BuildIcon />
                </div>
                <h6 className="text-xl font-semibold">lorem ipsum</h6>
                <p className="mt-2 mb-4 text-gray-600">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure
                  quod quasi, voluptatibus odit modi unde.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-6 w-full md:w-4/12 px-4 text-center">
            <div className="relative flex flex-col min-w-0 break-words backdrop-blur-md w-full mb-8 shadow-3xl rounded-lg">
              <div className="px-4 py-8 flex-auto">
                <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-black-">
                  <HandymanIcon />
                </div>
                <h6 className="text-xl font-semibold">lorem ipsum</h6>
                <p className="mt-2 mb-4 text-gray-600">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure
                  quod quasi, voluptatibus odit modi unde.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center mt-32">
          <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
            <h3 className="text-3xl mb-2 font-semibold leading-normal">
              Lorem ipsum
            </h3>
            <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure
              quod quasi, voluptatibus odit modi unde. Lorem ipsum dolor, sit
              amet consectetur adipisicing elit. Iure quod quasi, voluptatibus
              odit modi unde.
            </p>

            <a className="font-bold text-gray-800 mt-8">Lorem ipsum</a>
          </div>

          <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
            <div className="relative flex flex-col min-w-0 break-words  w-full mb-6 shadow-lg rounded-lg bg-[#ce8908b2]">
              <img
                alt="smith"
                src="/assets/smith.jpg"
                className="w-full align-middle rounded-t-lg"
              />
              <div className="relative p-8 mb-4">
                <h4 className="text-xl font-bold text-white">lorem ipsum</h4>
                <p className="text-md font-light mt-2 text-white">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure
                  quod quasi, voluptatibus odit modi unde.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

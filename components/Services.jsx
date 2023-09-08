import React from "react";
import BuildIcon from "@mui/icons-material/Build";
import SquareFootIcon from "@mui/icons-material/SquareFoot";
import HandymanIcon from "@mui/icons-material/Handyman";
const Services = () => {
  return (
    <section className="py-20 -mt-32 ">
      <div className="container mx-auto px-4">

        <div className="flex flex-wrap items-center mt-32">
          
          <div className="w-full md:w-6/12  mr-auto ml-auto">
          <div className="flex flex-wrap w-full">
          <div className=" mx-2 w-full sm:w-[46%] md:w-[45%] lg:w-[30%] text-center">
            <div className=" flex flex-col min-w-0 xl:h-[250px] break-words backdrop-blur-md w-full mb-8 shadow-4xl rounded-sm">
              <div className="sm:px-1 sm:py-2 lg:px-4 lg:py-8 px-4 py-8 flex-auto">
                <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-black-">
                  <SquareFootIcon />
                </div>
                <h6 className="text-xl font-semibold">Discover unique, handmade crafts.</h6>
              </div>
            </div>
          </div>

          <div className="mx-2 w-full sm:w-[48%] md:w-[45%] lg:w-[30%] text-center">
            <div className=" flex flex-col min-w-0  xl:h-[250px] break-words backdrop-blur-md w-full mb-8 shadow-4xl rounded-sm">
              <div className="sm:px-1 sm:py-2 lg:px-4 lg:py-8 px-4 py-8 flex-auto">
                <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-black-">
                  <BuildIcon />
                </div>
                <h6 className="text-xl font-semibold">Support local and international artisans.</h6>
              </div>
            </div>
          </div>

          <div className="mx-2 w-full sm:w-[100%] lg:w-[30%] text-center">
            <div className=" flex flex-col min-w-0 xl:h-[250px] break-words backdrop-blur-md w-full mb-8 shadow-4xl rounded-sm">
              <div className="sm:px-1 sm:py-2 lg:px-4 lg:py-8 px-4 py-8 flex-auto">
                <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-black-">
                  <HandymanIcon />
                </div>
                <h6 className="text-xl font-semibold">Get exposure for your work.</h6>
              </div>
            </div>
          </div>
        </div>

            <h3 className="text-3xl mb-2 font-semibold leading-normal">
              Handmade crafts that are sure to impress.
            </h3>
            <p className="text-lg font-semibold leading-relaxed mt-4 mb-4 text-gray-700">
            Shop for handmade crafts with peace of mind knowing that you're supporting local artisans.
            </p>
          </div>

          <div className="w-full md:w-6/12 px-2 mr-auto ml-auto">
            <div className="relative h-full md:h-[550px] lg:h-full flex flex-col min-w-0 break-words  w-full mb-6 shadow-xl rounded-lg bg-[#ce8908b2]">
              <img
                alt="smith"
                src="/assets/smith.jpg"
                className="w-full align-middle rounded-t-lg"
              />
              <div className="relative p-8 mt-0 md:mt-8 lg:mt-0">
                <h4 className="text-xl font-bold text-white">Reach a global audience of buyers who appreciate handmade goods.</h4>
                <p className="text-md font-light mt-2 text-white">
                Build a successful handmade business with our easy-to-use platform.
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

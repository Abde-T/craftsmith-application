import React from "react";
import BuildIcon from "@mui/icons-material/Build";
import SquareFootIcon from "@mui/icons-material/SquareFoot";
import HandymanIcon from "@mui/icons-material/Handyman";
const Services = () => {
  return (
    <section className=" py-20 -mt-32 ">
      <div className="container mx-auto px-8">

        <div className="flex flex-wrap flex-col items-center mt-32 ">
       
          
          <div className=" w-full md:w-10/12  mr-auto ml-auto ">
          <div className="w-full border-b border-gray mb-14">
  
  </div>
         
          <h3 className="text-3xl mb-2 font-semibold leading-normal text-center">
              Handmade crafts that are sure to impress.
            </h3>
            <p className="text-lg leading-relaxed mt-4 mb-4 text-center text-gray-600 mb-6">
            Shop for handmade crafts with peace of mind knowing that you're supporting local artisans.
            </p>
          <div className="mt-24 flex flex-wrap w-full ">
          <div className=" mx-auto w-full sm:w-[46%] md:w-[45%] lg:w-[30%] text-center">
            <div className=" flex flex-col min-w-0 xl:h-[250px] break-words w-full mb-8 shadow-3xl rounded-md">
              <div className="sm:px-1 sm:py-2 lg:px-4 lg:py-8 px-4 py-8 flex-auto">
                <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-black-">
                  <SquareFootIcon />
                </div>
                <h6 className="text-xl font-semibold mt-4">Discover unique, handmade crafts.</h6>
              </div>
            </div>
          </div>

          <div className=" lg:mr-6 mx-2 w-full sm:w-[48%] md:w-[45%] lg:w-[30%] text-center">
            <div className=" flex flex-col min-w-0  xl:h-[250px] break-words backdrop-blur-md w-full mb-8 shadow-3xl rounded-md">
              <div className="sm:px-1 sm:py-2 lg:px-4 lg:py-8 px-4 py-8 flex-auto">
                <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-black-">
                  <BuildIcon />
                </div>
                <h6 className="text-xl font-semibold mt-4">Support local and international artisans.</h6>
              </div>
            </div>
          </div>

          <div className=" lg:mr-6 mx-2 w-full sm:w-[100%] lg:w-[30%] text-center">
            <div className=" flex flex-col min-w-0 xl:h-[250px] break-words backdrop-blur-md w-full mb-8 shadow-3xl rounded-md">
              <div className="sm:px-1 sm:py-2 lg:px-4 lg:py-8 px-4 py-8 flex-auto">
                <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-black-">
                  <HandymanIcon />
                </div>
                <h6 className="text-xl font-semibold mt-4 ">Get exposure for your work.</h6>
              </div>
            </div>
          </div>
          <div className="w-full border-b border-gray mt-14">
  
        </div>
        </div>

            
          </div>
          
          <div className="w-full grid grid-cols-1 text-center lg:grid-cols-2 md:text-left mt-16 mr-auto ml-auto">
            <div className=" h-full flex flex-col justify-center">
            <h3 className=" text-2xl md:text-h3 text-center lg:text-left mb-2 font-semibold leading-normal  ">Reach a global audience of buyers who appreciate handmade goods.</h3>
                <p className="text-center lg:text-left text-lg leading-relaxed mt-4 mb-4 text-gray-600 mb-6">
                Build a successful handmade business with our easy-to-use platform.
                </p>
            </div>
           
            <div >
              <img
                alt="smith"
                src="/assets/smith.jpg"
                className="w-full shadow-5xl align-middle custom-shadow md:h-[300px] lg:h-full object-cover"
              />
             
                
             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

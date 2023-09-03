import React from "react";
import CarpenterIcon from "@mui/icons-material/Carpenter";
import ConstructionIcon from "@mui/icons-material/Construction";
import BuildIcon from '@mui/icons-material/Build';
const Features = () => {
  return (
    <section className="relative py-20 ">
      <div
        className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden "
        style={{ height: "80px" }}
      ></div>

      <div className="container mx-auto px-4">
        <div className="items-center flex flex-wrap">
          <div className="flex justify-between relative md:h-[500px] w-full md:w-[50%] ml-auto mr-auto mb-4 px-4">
            <img
              alt="..."
              className=" md:absolute xl:top-0 xl:left-0 lg:left-[-20%] lg:w-[40%] xl:max-w-[30%] md:w-[40%] md:left-0 w-[30%] rounded-lg shadow-lg"
              src="/assets/carpenter.jpg"
            />
            <img
              alt="..."
              className=" md:absolute xl:right-0 xl:top-0 lg:right-[-5%] lg:w-[40%] xl:max-w-[30%] md:w-[40%] max-w-[1280px]:top-0 md:right-0 md:top-[30%] w-[30%] rounded-lg shadow-lg"
              src="/assets/forge.jpg"
            />
            <img
              alt="..."
              className=" md:absolute xl:bottom-0 xl:left-[35%] lg:left-[22%] lg:w-[40%] xl:max-w-[30%] md:w-[40%] md:bottom-0 md:left-0 w-[30%] rounded-lg shadow-lg"
              src="/assets/wood.jpg"
            />

          </div>
          <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
            <div className="md:pr-12">
              <h3 className="text-3xl font-semibold">Lorem ipsum dolor</h3>
              <p className="mt-4 text-lg leading-relaxed text-gray-600">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure
                quod quasi, voluptatibus odit modi unde.
              </p>
              <ul className="list-none mt-6">
                <li className="py-2">
                  <div className="flex items-center">
                    <div>
                      <span className="text-xs font-semibold inline-block py-3 px-3 uppercase rounded-full text-black- bg-black- mr-3">
                        <BuildIcon className="text-white text-sm"/>
                      </span>
                    </div>
                    <div>
                      <h5 className="text-black-">
                      Lorem ipsum
                      </h5>
                    </div>
                  </div>
                </li>
                <li className="py-2">
                  <div className="flex items-center">
                    <div>
                      <span className="text-xs font-semibold inline-block py-3 px-3 uppercase rounded-full text-black- bg-black- mr-3">
                        <CarpenterIcon className="text-white text-sm" />
                      </span>
                    </div>
                    <div>
                      <h5 className="text-black-">Lorem ipsum</h5>
                    </div>
                  </div>
                </li>
                <li className="py-2">
                  <div className="flex items-center">
                    <div>
                      <span className="text-xs font-semibold inline-block py-3 px-3 uppercase rounded-full text-black- bg-black- mr-3">
                        <ConstructionIcon className="text-white text-sm" />
                      </span>
                    </div>
                    <div>
                      <h5 className="text-black-">Lorem ipsum</h5>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

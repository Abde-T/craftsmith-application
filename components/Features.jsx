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
          <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
            <img
              alt="..."
              className="max-w-full rounded-lg shadow-lg"
              src="/assets/carpenter.jpg"
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
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-black- bg-black- mr-3">
                        <BuildIcon className="text-white text-sm"/>
                      </span>
                    </div>
                    <div>
                      <h4 className="text-gray-600">
                      Lorem ipsum
                      </h4>
                    </div>
                  </div>
                </li>
                <li className="py-2">
                  <div className="flex items-center">
                    <div>
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-black- bg-black- mr-3">
                        <CarpenterIcon className="text-white text-sm" />
                      </span>
                    </div>
                    <div>
                      <h4 className="text-gray-600">Lorem ipsum</h4>
                    </div>
                  </div>
                </li>
                <li className="py-2">
                  <div className="flex items-center">
                    <div>
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-black- bg-black- mr-3">
                        <ConstructionIcon className="text-white text-sm" />
                      </span>
                    </div>
                    <div>
                      <h4 className="text-gray-600">Lorem ipsum</h4>
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

"use client";
import React from "react";
import { Temp } from "@constants/index";
import Masonry from "@mui/lab/Masonry";

const Crafts = () => {
  return (
    <div className="h-full w-full bg-black- flex justify-center">
      <div className=" w-[1400px] p-6">
        <Masonry
          columns={{ xs: 2, sm: 2, md: 2, lg: 4, xl: 5 }}
          spacing={{ xs: 1, sm: 2, md: 3 }}
          height={40}
        >
          {Temp.map((e, index) => (
            <div class="card">
              <img
                alt={e.name}
                src={e.logo}
                className="shadow-lg mx-auto"
                style={{ maxWidth: "100%" }}
              />
              <div class="card__content">
                <p class="card__title"> Title</p>
                <p class="card__description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                </p>
                <div>
                  <button class="card__button">See More</button>
                  <button class="card__button secondary">Buy</button>
                </div>
              </div>
            </div>
          ))}
          {/* temp code to fill up crafts section*/}
          {Temp.reverse().map((e, index) => (
            <div class="card">
              <img
                alt={e.name}
                src={e.logo}
                className="shadow-lg mx-auto"
                style={{ maxWidth: "100%" }}
              />
              <div class="card__content">
                <p class="card__title"> Title</p>
                <p class="card__description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                </p>
                <div>
                  <button class="card__button">See More</button>
                  <button class="card__button secondary">Buy</button>
                </div>
              </div>
            </div>
          ))}
          {Temp.map((e, index) => (
            <div class="card">
              <img
                alt={e.name}
                src={e.logo}
                className="shadow-lg mx-auto"
                style={{ maxWidth: "100%" }}
              />
              <div class="card__content">
                <p class="card__title"> Title</p>
                <p class="card__description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                </p>
                <div>
                  <button class="card__button">See More</button>
                  <button class="card__button secondary">Buy</button>
                </div>
              </div>
            </div>
          ))}
        </Masonry>
      </div>
    </div>
  );
};

export default Crafts;

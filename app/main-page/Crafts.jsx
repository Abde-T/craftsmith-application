"use client";
import React from "react";
import { Temp } from "@constants/index";
import { Avatar } from "@mui/material";
import MessageIcon from "@mui/icons-material/Message";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import Sidebar from "@components/Sidebar";

const Crafts = () => {
  return (
    <div className="w-full bg-black- flex justify-center">
      <div className="h-full w-[1440px] flex justify-center relative">
        <Sidebar />
        <div className="h-full w-full bg-black- flex justify-center py-[50px]">
          <div className=" max-w-[1400px] p-6 masonry">
            {Array(4).fill(
              Temp.map((e, index) => (
                <div className="card" key={index}>
                  <img
                    alt={e.name}
                    src={e.logo}
                    className="shadow-lg mx-auto"
                    style={{ maxWidth: "100%" }}
                  />
                  <div className="card__content">
                    <div className="h-[50%]">
                      <p className="card__title"> Title</p>
                      <p className="card__description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua...
                      </p>
                      <p className="text-[#777]">#Japan #forge #Katana </p>
                      <div className="w-full flex justify-end my-5 ">
                        <StarIcon className="text-orange-" />
                        <StarIcon className="text-orange-" />
                        <StarIcon className="text-orange-" />
                        <StarIcon className="text-orange-" />
                        <StarHalfIcon className="text-orange-" />
                      </div>
                      <div className="flex flex-wrap w-full justify-between">
                        <button className="card__button w-[100%] sm:w-[40%]">
                          See More
                        </button>
                        <div className="w-full sm:w-[40%] flex">
                          <button className="p-1 rounded-lg m-1 border border-black- w-[44%] sm:w-[50%]">
                            <ThumbUpIcon />
                          </button>
                          <button className="card__button secondary w-[44%] sm:w-[50%]">
                            <ShoppingCartIcon />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="flex  items-center justify-between h-[50%] ">
                      <div className="flex">
                        <Avatar
                          className=""
                          alt=""
                          src=""
                          sx={{ width: 40, height: 40 }}
                          style={{
                            backgroundColor: "#242424",
                            fontSize: "30px",
                          }}
                        ></Avatar>
                        <div className="hidden md:block">
                          <p className="text-md font-extrabold ml-1"> name</p>
                          <p className="text-md font-extralight ml-1">
                            {" "}
                            @userName
                          </p>
                        </div>
                      </div>
                      <div className=" flex items-center ml-[12px]">
                        <button className="border-none bg-black- p-[5px] text-white rounded-full ">
                          <AddCircleOutlineIcon />
                        </button>
                        <button className="border bg-gray-400 p-[5px] rounded-md ml-[5px]">
                          <MessageIcon />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Crafts;

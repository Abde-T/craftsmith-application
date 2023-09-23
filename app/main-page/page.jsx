import React from "react";
import Crafts from "./Crafts";
import Sidebar from "@components/Sidebar";
const Main = () => {
  return (
    <div className="min-h-full bg-black">
      <div className=" h-[100vh] md:bg-center sm:bg-right bg-[600px] bg-cover flex items-center justify-center p-6 bg-black text-white">
        Main
      </div>
      <div className=" h-full bg-white flex relative">
        <Crafts />
      </div>
    </div>
  );
};

export default Main;

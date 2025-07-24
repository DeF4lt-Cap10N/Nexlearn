import React from "react";
import LeftBar from "./LeftBar";
import { Outlet } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="pt-10 mt-8 flex flex-col md:flex-row">
      <div className="w-full md:w-2/12">
        <LeftBar />
      </div>
      <div className="w-full md:w-11/12 flex justify-center items-center ">
        <Outlet />
      </div>
    </div>
  );
};


export default HeroSection;

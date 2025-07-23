import React from "react";
import LeftBar from "./LeftBar";
import { Outlet } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="pt-10 mt-8 flex">
      <div className="w-1/5">
        <LeftBar />
      </div>
      <div className="w-3/4 flex justify-center items-center">
        <Outlet />
      </div>
    </div>
  );
};


export default HeroSection;

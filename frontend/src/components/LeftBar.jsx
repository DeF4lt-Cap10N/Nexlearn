import React from "react";
import { Link, useLocation } from "react-router-dom";

const LeftBar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path) =>
    `cursor-pointer font-semibold mb-5 ${
      currentPath === path ? "text-blue" : "text-gray-400"
    }`;

  return (
    <div className="hidden md:flex flex-col gap-5 fixed top-14 left-0 w-64 h-screen bg-primary z-40">
      <div className="pt-10 pl-10">
        <p className="text-sm text-gray-400 uppercase font-extrabold p-3">
          Main Menu
        </p>

        <div className="flex flex-col p-3">
          <Link to="/" className={isActive("/")}>
            Home
          </Link>

          <Link to="/courses" className={isActive("/courses")}>
            Course
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LeftBar;

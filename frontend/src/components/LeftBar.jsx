import React, { useState } from "react";

const LeftBar = () => {
  const [activeTab, setActiveTab] = useState("Home");

  const ontabClick = (tab) =>
    `cursor-pointer font-semibold ${
      activeTab === tab ? "text-blue" : "text-gray-400"
    }`;

  return (
    <div
      className="fixed top-14 left-0 w-64 h-[calc(100vh-3.5rem)] bg-primary z-40"
      style={{
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.25)",
      }}
    >
      <div className="flex flex-col justify-center pt-10 pl-10 gap-5">
        <p className="text-sm text-gray-400 uppercase font-extrabold ">
          Main Menu
        </p>

        <h3 className={ontabClick("Home")} onClick={() => setActiveTab("Home")}>
          Home
        </h3>

        <h3
          className={ontabClick("Course")}
          onClick={() => setActiveTab("Course")}
        >
          Course
        </h3>
      </div>
    </div>
  );
};

export default LeftBar;

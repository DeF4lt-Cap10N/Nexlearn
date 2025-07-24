import React from "react";
import logo from "../assets/ChatGPT Image Jul 23, 2025, 01_12_03 AM.png"

const Navbar = () => {
  return (
    <>
      <div className="fixed top-0 left-0 z-50 bg-white text-black flex justify-between p-2 pt-1 font-serif w-screen shadow-lg ">
        <div className="ml-5">
          <img
            src={logo}
            className="w-12 h-12 rounded-full border border-gray-400"
          />
        </div>

        <div className="flex gap-3 justify-center items-center mr-5 text-lg">
          <div className="hidden md:flex mr-5 justify-center items-center">
            <input
              placeholder="Type here to Search.."
              className="border border-grey-400 bg-white p-1 rounded-l-full pl-5 h-10 outline-none"
            />
            <span className="border border-grey-400 bg-white p-1 rounded-r-full w-12 border-l-0 h-10 flex justify-center items-center cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M 9 2 C 5.1458514 2 2 5.1458514 2 9 C 2 12.854149 5.1458514 16 9 16 C 10.747998 16 12.345009 15.348024 13.574219 14.28125 L 14 14.707031 L 14 16 L 19.585938 21.585938 C 20.137937 22.137937 21.033938 22.137938 21.585938 21.585938 C 22.137938 21.033938 22.137938 20.137938 21.585938 19.585938 L 16 14 L 14.707031 14 L 14.28125 13.574219 C 15.348024 12.345009 16 10.747998 16 9 C 16 5.1458514 12.854149 2 9 2 z M 9 4 C 11.773268 4 14 6.2267316 14 9 C 14 11.773268 11.773268 14 9 14 C 6.2267316 14 4 11.773268 4 9 C 4 6.2267316 6.2267316 4 9 4 z"></path>
              </svg>
            </span>
          </div>

          <div className="md:hidden">
            <span className="flex justify-center items-center cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M 9 2 C 5.1458514 2 2 5.1458514 2 9 C 2 12.854149 5.1458514 16 9 16 C 10.747998 16 12.345009 15.348024 13.574219 14.28125 L 14 14.707031 L 14 16 L 19.585938 21.585938 C 20.137937 22.137937 21.033938 22.137938 21.585938 21.585938 C 22.137938 21.033938 22.137938 20.137938 21.585938 19.585938 L 16 14 L 14.707031 14 L 14.28125 13.574219 C 15.348024 12.345009 16 10.747998 16 9 C 16 5.1458514 12.854149 2 9 2 z M 9 4 C 11.773268 4 14 6.2267316 14 9 C 14 11.773268 11.773268 14 9 14 C 6.2267316 14 4 11.773268 4 9 C 4 6.2267316 6.2267316 4 9 4 z"></path>
              </svg>
            </span>
          </div>

          <button className="bg-blue text-white p-2 pl-5 pr-5 rounded-full text-center cursor-pointer">
            <span>Signup</span>
          </button>
          <button className="bg-blue text-white p-2 pl-5 pr-5 rounded-full cursor-pointer">
            <span >Login</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;

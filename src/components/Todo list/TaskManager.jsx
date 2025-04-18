import React, { useEffect, useState } from 'react'
import Task from './Task'
import Header from './Header';
import Footer from './Footer';

const TaskManager = () => {
  const [color, setColor] = useState("dark");

  const Change = () => {
    setColor(color === "dark" ? "light" : "dark");
  };

  return (
    <>
      <div
        className="flex flex-col gap-10 justify-start items-center text-center w-full min-h-screen overflow-y-auto overflow-x-hidden"
        style={{
          backgroundColor: color === "dark" ? "black" : "white",
          color: color === "dark" ? "white" : "black",
        }}
      >
        {/* Header Section */}
        <div>
          <Header />
          <hr className="w-full h-1 text-gray-300" />
        </div>

        {/* Theme Toggle Button */}
        <button
          className="w-full flex justify-end px-4 sm:px-10 md:px-20"
          onClick={Change}
        >
          {color === "dark" ? (
            <img
              className="w-[60px] h-[48px] rounded-full"
              src="/lighttheme.jpg"
              alt="lighttheme"
            />
          ) : (
            <img
              className="w-[60px] h-[48px] rounded-full"
              src="/darktheme.jpg"
              alt="darktheme"
            />
          )}
        </button>

        {/* Main Task Area */}
        <div className="flex-1 flex items-center justify-center">
          <Task />
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default TaskManager;


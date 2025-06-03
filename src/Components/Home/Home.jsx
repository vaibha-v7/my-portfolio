import React from "react";
import model from "../../assets/model.png";
import TextChange from "../TextChange";

const Home = () => {
  return (
    <div className="text-white flex w-full justify-between items-start p-10 md:p-20">
      <div className="md:w-2/4 md:pt-10 ">
        <h1 className="text-xl md:text-6xl font-bold flex leading-normal tracking-tighter">
          <TextChange />
        </h1>
        <p className="text-sm md:text-2xl tracking-tight mt-4 md:mt-8">
          I'm a Full Stack Web Developer with a strong passion for backend development, particularly using the MERN stack (MongoDB, Express.js, React, Node.js). I enjoy designing scalable APIs, managing databases, and building the logic that powers modern web applications.
        </p>

        <a href="#Footer">
        <button className="mt-10 md:md-10 text-white py02 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
          Contact Me
        </button>
        </a>

      </div>
      <div className="hidden md:block md:w-2/4">
        <img className="" src={model}  alt="hlo" />
      </div>
    </div>
  );
};

export default Home;

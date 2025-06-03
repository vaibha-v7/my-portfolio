import React from "react";
// import bannerImg from "../../assets/photo-C8q0KQHG.webp";
const ProjectCard = ({ title, main , img ,demo ,sourcecode }) => {
  return (
    <div className="p-3 md:p-6 flex flex-col w-80 bg-[#0c0e19] shadow-xl shadow-slate-900 rounded-2xl">
      <img className=" w-[100%] rounded-xl" src={img} alt="hlo" />
      <h3 className="mt-8 px-4 text-xl md:text-2xl font-bold leading-normal">
        {title}
      </h3>
      <p className="px-4 text-base md:text-md  py-2">{main}</p>




      <div className="mt-2 p-2 md:p-4 flex gap-2 md:gap-4">

        <a target="_blank" rel="noopener noreferrer" href={demo}>
        <button className="md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
          Demo
        </button>
        </a>


        <a target="_blank" rel="noopener noreferrer" href={sourcecode}>
        <button className="md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
          Source Code
        </button>
        </a>

      </div>




    </div>
  );
};

export default ProjectCard;

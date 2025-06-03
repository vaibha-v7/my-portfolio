import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white ">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5 items-center justify-center">
        <ProjectCard
          img="https://arjancodes.com/_astro/how-to-build-a-simple-discord-bot-leading.1JGv7MUV.jpeg"
          title="Discord Bot"
          main="A feature-rich Discord music bot that supports multiple music platforms and languages"
          demo="https://discord.com/oauth2/authorize?client_id=1342201785317851249"
          sourcecode="https://github.com/vaibha-v7/courage_bot"
        />
        <ProjectCard
        img="https://mediumrare.imgix.net/30688668d7d2d48d472edd0f1e2bca0758e7ec51cbab8c04d8b7f157848640e0?q=85"
          title="Dice Game"
          main="its a basic dice game created using react was a great starting project for learning basics of react"
          demo="https://gilded-smakager-4108a0.netlify.app/"
          sourcecode="https://github.com/vaibha-v7/Dice_Game"
        />
        <ProjectCard
          img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAYC5ELcypMSxCl_0Z72QTMnhJz7rwMcol9Q&s"
          title="Simon Game"
          main="A fun memory game where you have to repeat the color sequence! Built with HTML, CSS, and JavaScript."
          demo="https://vaibha-v7.github.io/simon-says-game/"
          sourcecode="https://github.com/vaibha-v7/simon-says-game"
        />
      </div>
    </div>
  );
};

export default Projects;

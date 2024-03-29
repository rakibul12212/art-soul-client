import React from 'react';
import { Slide,JackInTheBox, Fade } from "react-awesome-reveal";

const Herosection = () => {
  return (
    <div
      className="flex items-center justify-center w-full h-auto"
      style={{
        background: 'url("https://i.ibb.co/8bpj9hX/herosectionimg.jpg")',
        backgroundRepeat:' none',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
       <div className="relative p-10">
      <div className="absolute inset-0"></div>
      <div className="text-center md:text-left p-4">
        <Slide>
          <p className="text-white font-bold text-lg md:text-xl ">Welcome</p>
        </Slide>
        <Fade delay={1e3} cascade damping={5e-3}>
          <h1 className="text-gray-700 text-2xl md:text-5xl font-bold pb-3 md:pb-5">Resurrecting time-tested skills.</h1>
        </Fade>
        <Fade cascade damping={0.30}>
          <p className="text-lg md:text-2xl pb-2 md:pb-5 text-gray-800">"Traditionally Passed From One Generation to The Next"</p>
          <p className="text-white">
            ArtSoul is a well-resourced and highly professional school, established in 2008 in response to the rarity of rigorous,
            representational art education.
          </p>
        </Fade>
        <button className="bg-orange-500 bg-opacity-70 hover:bg-cyan-500 text-white py-2 px-4 rounded-3xl mt-4 transition-all duration-500 transform hover:translate-x-2">
          MORE ABOUT US
        </button>
      </div>
    </div>

    </div>
  );
};

export default Herosection;




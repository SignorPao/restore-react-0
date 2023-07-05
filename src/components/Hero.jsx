import React from "react";
import hero_img from "../assets/hero.jpg";

const Hero = () => {
  return (
    <div className="w-full h-[90vh]">
      <img src={hero_img} alt="hero" className="w-full h-full object-cover brightness-75" />
      <div className="max-w-[1140px] m-auto">
        <div className="absolute top-[40%] w-full md:w-[50%] max-w-[600px] flex flex-col text-white p-4">
          <h1 className="font-bold text-4xl lg:text-5xl capitalize">Find your special trip</h1>
          <h2 className="text-3xl lg:text-4xl py-4 italic">With WEAKAWAY</h2>
          <p className="lg:text-lg font-light">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto illo
            quod sunt, possimus sint doloremque labore similique! Quibusdam
            nesciunt libero blanditiis laudantium, velit placeat dolores
            ducimus, perferendis porro cumque provident
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;

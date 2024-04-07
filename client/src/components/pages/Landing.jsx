import React from "react";
import { Link } from "react-router-dom";
import { SparklesCore } from "../ui/sparkles";

export function Landing() {
  return (
    <div className="h-screen relative w-full bg-black flex flex-col overflow-hidden rounded-md">
      <div className="w-full absolute inset-0">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={40}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      <h1 className="md:text-7xl text-3xl lg:text-6xl font-bold text-center text-white relative z-20 mt-28">
      <span style={{ color: '#8932a8' }}>C</span>
        <span style={{ color: '#248fe0' }}>o</span>
        <span style={{ color: '#e0a536' }}>d</span>
        <span style={{ color: '#0000ff' }}>e</span>
        <span style={{ color: '#ffff00' }}>m</span>
        <span style={{ color: '#f7ee6f' }}>a</span>
        <span style={{ color: '#8932a8' }}>k</span>
        <span style={{ color: '#248fe0' }}>e</span>
        <span style={{ color: '#e0a536' }}>r</span>
      </h1>
      <h1 className="lg:text-2xl text-center text-white relative z-20 mt-8">
        Have code not working properly? Have no Fear, Codemaker has got your back!
      </h1>
      <Link to="/codemake" className="mx-auto">
      <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded mt-32 mx-auto z-50 relative">
       Get Started!
      </button>
      </Link>
      <button class="bg-yellow-500 hover:bg-yellow-400 text-white font-bold py-2 px-4 border-b-4 border-yellow-700 hover:border-yellow-500 rounded mt-20 mx-auto z-50 relative">
       What is Codemaker?
      </button>
    </div>
  );
}

export default Landing;

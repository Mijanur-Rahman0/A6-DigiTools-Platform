import React from "react";
import banner from "../../assets/banner.png";
import { Play } from "lucide-react";

const Hero = () => {
  return (
    <div className="hero text-center lg:text-start bg-white text-black mb-15">
      <div className="hero-content flex-col lg:flex-row-reverse gap-15">
        <img src={banner} className="max-w-sm rounded-lg shadow-xl" />
        <div>
          <div className="flex gap-4 w-fit border border-transparent px-6 py-2 rounded-full bg-[#E1E7FF] mb-4 mx-auto lg:mx-0">
            <div class="flex items-center justify-center">
              <div
                className="w-0.5 h-0.5 bg-purple-600 rounded-full
              ring-4 ring-purple-500
              ring-offset-6 ring-offset-purple-300
              shadow-lg"
              ></div>
            </div>
            <p className="font-medium">New: AI-Powered Tools Available</p>
          </div>
          <h1 className="text-7xl font-bold">
            Supercharge Your Digital Workflow
          </h1>
          <p className="py-6 text-[#627382]">
            Access premium AI tools, design assets, templates, and productivity<br/>
            software—all in one place. Start creating faster today.<br/> 
            Explore
            Products
          </p>
          <button className="btn btn-primary bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full mr-2">Explore Products</button>
          <button className="btn btn-outline btn-primary rounded-full"><Play></Play> Watch Demo</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;

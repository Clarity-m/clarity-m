import React from "react";
import { NavbarHome } from "../components/NavbarHome";

export const Hero = () => {
  return (
    <div className="relative overflow-hidden text-white">
      <div className="mx-auto">
        <div className="flex flex-col justify-center z-10">
          <h1 className="text-6xl md:text-9xl font-extrabold">Clarity/DEV</h1>
          <span className="text-white text-xl md:text-2xl text-left pl-2">
            Myanmar Developer
          </span>
          <div className="flex gap-4 justify-center">
            <NavbarHome />
          </div>
        </div>
      </div>
    </div>
  );
};

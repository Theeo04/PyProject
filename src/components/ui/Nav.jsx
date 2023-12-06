import React from "react";
import { Button } from "./button";
import ServiceButtonNav from "./ServiceButtonNav";

function Nav() {
  return (
    <div className="bg-black p-4 z-20 shadow-black border-b border-slate-700">
      <nav className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img
            className="h-12 md:h-20 w-auto"
            src="NewLogoPng.png"
            alt="Logo"
          />
        </div>

        {/* Navbar Links */}
        <div className="flex items-center space-x-5">
          <Button className="text-black bg-white rounded-xl">Log In</Button>
          <div className="hidden sm:flex items-center space-x-5">
            {/* <Button className="text-white bg-black gradient-border-animation rounded-md">
              Services
            </Button> */}
            <ServiceButtonNav />
            <Button className="text-black bg-white rounded-xl">About</Button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;

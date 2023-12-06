import React from "react";
import { Button } from "./button";

function LandingPage() {
  return (
    <div className="flex flex-col sm:flex-row sm:justify-evenly sm:space-x-[5%] bg-black mt-10">
      <div className="w-[60%] sm:w-[40%] mx-auto sm:mx-0">
        {/* Content for the first div */}
        <div className="bg-black">
          <img
            src="manscanreceipt.png"
            alt="manscanreceipt"
            className="w-full h-auto"
          />
        </div>
      </div>

      <div className="w-full sm:w-[37%] mt-12">
        {/* Content for the second div */}
        <div className="text-center md:text-left">
          <h1 className="text-xl text-white sm:text-2xl md:text-3xl xl:text-6xl font-bold leading-tight">
            Automate Receipts, Maximize Insights
          </h1>
          <p className="mt-6 text-center text-sm md:text-sm text-gray-500 px-3">
            Transform finance with our AI-driven receipt scanning. Ideal for
            Smart Monetization and efficient acquisitions management, it
            revolutionizes your processes for streamlined operations.
          </p>
          <div className="mx-auto w-[50%]">
            <Button className="w-full text-black bg-slate-200 mt-10">
              Start Now!
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;

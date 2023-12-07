import Nav from "@/components/ui/Nav";
import SwitchTabsScanning from "@/components/ui/SwitchTabsScanning";
import React from "react";

function resumeapp() {
  return (
    <div className="bg-black h-full">
      <Nav />
      <h1 className="text-slate-200 text-2xl text-center font-extrabold md:text-left md:pl-20 mt-11 pb-[3%] ml-4 md:text-5xl pr-2">
        Generate concise summaries for your PDF and image documents here.
      </h1>
      <SwitchTabsScanning />
    </div>
  );
}

export default resumeapp;

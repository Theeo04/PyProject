import About from "@/components/ui/About";
import LandingPage from "@/components/ui/LandingPage";
import Nav from "@/components/ui/Nav";
import { Button } from "@/components/ui/button";
import React from "react";

function index() {
  return (
    <div className="bg-black">
      <Nav />
      <LandingPage/>
      <About />
    </div>
  );
}

export default index;

import About from "@/components/ui/About";
import AboutUs from "@/components/ui/AboutUs";
import LandingPage from "@/components/ui/LandingPage";
import Nav from "@/components/ui/Nav";
import { Button } from "@/components/ui/button";
import React, { useEffect } from "react";
import { getUserSessionDetails } from "../../supabaseUtils";

function index() {
  // useEffect(() => {
  //   getUserSessionDetails();
  // }, []);

  return (
    <div className="bg-black">
      <Nav />
      <LandingPage />
      <About />
      <AboutUs />
    </div>
  );
}

export default index;

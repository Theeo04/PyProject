import React from "react";

function About() {
  return (
    <div>
      {/* <div className="flex flex-col sm:flex-row sm:justify-evenly sm:space-x-[5%] bg-black">
       
      </div> */}

      <div className="container mx-auto py-8 flex flex-col md:flex-row justify-around items-center space-x-[5%] mt-7">
        {/* First Div */}
        <div className="bg-white p-8 m-4 md:w-[25%] md:flex-shrink-0 rounded-2xl flex flex-col">
          {/* Content for the first div */}
          <div className="flex items-center">
            <img src="logoai.avif" alt="pic1" className="h-[5em]" />
            <p className="text-xs px-3 md:text-lg font-semibold text-black">
              AI Technology
            </p>
          </div>
          <p className="p-2">First Div Content</p>
        </div>

        {/* Second Div */}
        <div className="bg-white p-8 m-4 md:w-[25%] md:flex-shrink-0 rounded-2xl flex flex-col">
          {/* Content for the first div */}
          <div className="flex items-center">
            <img src="apilogo.png" alt="pic1" className="h-[4.55em]" />
            <p className="text-xs px-3 font-semibold md:text-lg text-black">
              API Hosting
            </p>
          </div>
          <p className="p-2">First Div Content</p>
        </div>

        {/* Third Div */}
        <div className="bg-white p-8 m-4 md:w-[25%] md:flex-shrink-0 rounded-2xl flex flex-col">
          {/* Content for the first div */}
          <div className="flex items-center">
            <img src="logoai.avif" alt="pic1" className="h-[5em]" />
            <p className="text-xs px-3 font-semibold text-black md:text-lg">
              AI Technology
            </p>
          </div>
          <p className="p-2">First Div Content</p>
        </div>
      </div>
    </div>
  );
}

export default About;

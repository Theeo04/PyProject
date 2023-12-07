import React, { useEffect, useState } from "react";
import { Button } from "./button";
import ServiceButtonNav from "./ServiceButtonNav";
import { useRouter } from "next/router";
import { getUserSessionDetails } from "../../../supabaseUtils";
import { supabase } from "../../../supabase";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function Nav() {
  const router = useRouter();

  const [sessionDetails, setSessionDetails] = useState({});
  const [userDetails, setUserDetails] = useState({});

  const getUserSessionDetails = async () => {
    try {
      const { data, error } = await supabase.auth.refreshSession();
      const { session, user } = data;

      if (error) {
        console.error("Error getting user session:", error.message);
      } else {
        setSessionDetails(session);
        if (user) {
          setUserDetails(user);
        } else {
          console.log("User not authenticated.");
        }
      }
    } catch (error) {
      console.error("Supabase error:", error.message);
    }
  };

  useEffect(() => {
    getUserSessionDetails();
  }, []);

  console.log("Session Details object:", sessionDetails);
  console.log("User Details object:", userDetails);

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

        {userDetails.aud === "authenticated" ? (
          <Avatar className="mr-[3%] ">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        ) : (
          <div className="flex items-center space-x-5">
            <Button
              onClick={() => router.push("/loginregister")}
              className="text-black bg-white rounded-xl"
            >
              Log In
            </Button>
            <div className="hidden sm:flex items-center space-x-5">
              {/* <Button className="text-white bg-black gradient-border-animation rounded-md">
              Services
            </Button> */}
              <ServiceButtonNav />
              <Button className="text-black bg-white rounded-xl">About</Button>
            </div>
          </div>
        )}

        {/* Navbar Links */}
      </nav>
    </div>
  );
}

export default Nav;

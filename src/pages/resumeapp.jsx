import React, { useEffect } from "react";
import { getUserSessionDetails } from "../../supabaseUtils";

function resumeapp() {
  useEffect(() => {
    getUserSessionDetails();
  }, []);

  return <div>resumeapp</div>;
}

export default resumeapp;

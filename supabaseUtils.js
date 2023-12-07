import { supabase } from "./supabase";

async function getUserSessionDetails() {
  try {
    const { data, error } = await supabase.auth.refreshSession();
    const { session, user } = data;

    if (error) {
      console.error("Error getting user session:", error.message);
    } else {
      console.log("User session details:", session);
      if (user) {
        console.log("Authenticated user details:", user);
      } else {
        console.log("User not authenticated.");
      }
    }
  } catch (error) {
    console.error("Supabase error:", error.message);
  }
}

export { getUserSessionDetails };

// How to use =>

// import { getUserSessionDetails, user, session } from "../../supabaseUtils";
// useEffect(() => {
//   getUserSessionDetails();
// }, []);

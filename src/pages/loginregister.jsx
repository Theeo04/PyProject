import SwitchTabs from "@/components/ui/SwitchTabs";
import { useRouter } from "next/router";
import React from "react";

function loginregister() {
  const router = useRouter();

  return (
    <div className="bg-black h-[100vh]">
      <SwitchTabs />
    </div>
  );
}

export default loginregister;

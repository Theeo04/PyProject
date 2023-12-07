import React from "react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { useRouter } from "next/router";

function ServiceButtonNav() {
  const router = useRouter();

  return (
    <Menubar className=" rounded-xl hover:cursor-pointer ">
      <MenubarMenu>
        <MenubarTrigger className="hover:cursor-pointer">
          Services
        </MenubarTrigger>
        <MenubarContent>
          <MenubarItem className="text-sm font-medium">
            Scan Your Recipe!
          </MenubarItem>
          <MenubarItem
            className="text-sm font-medium"
            onClick={() => router.push("/resumeapp")}
          >
            Summarize Your Text!
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}

export default ServiceButtonNav;

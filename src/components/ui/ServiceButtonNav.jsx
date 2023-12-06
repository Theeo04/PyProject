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

function ServiceButtonNav() {
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
          <MenubarItem className="text-sm font-medium">
            Summarize Your Text!
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}

export default ServiceButtonNav;

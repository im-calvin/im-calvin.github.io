import React, { useState } from "react";
import { SwipeableDrawer } from "@mui/material";
import ResumeButton from "./ResumeButton";
import { MdClose, MdMenu, MdSegment } from "react-icons/md";

export default function MenuButton() {
  const [state, setState] = useState(false);

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event &&
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }
    setState(open);
  };

  const menuItem = (text: string, href: string) => {
    return <a href={href}>{text}</a>;
  };

  return (
    <>
      <button onClick={toggleDrawer(true)}>
        <MdSegment className="h-8 w-8" />
      </button>
      <SwipeableDrawer
        anchor={"right"}
        open={state}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}>
        <div className="flex h-full w-40 flex-col items-center justify-evenly gap-10 p-4">
          <MdClose onClick={toggleDrawer(false)} className="h-8 w-8 cursor-pointer" />
          {menuItem("About", "/about")}
          {menuItem("Projects", "/projects")}
          {menuItem("Blog", "/blog")}
          <ResumeButton />
        </div>
      </SwipeableDrawer>
    </>
  );
}

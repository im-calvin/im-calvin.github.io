import React, { useState } from "react";
import { SwipeableDrawer } from "@mui/material";
import ResumeButton from "./ResumeButton";
import { Icon } from "@iconify/react";

export default function MenuButton() {
  const [state, setState] = useState(false);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
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

  const menuItem = (text: string, href: string, target?: string) => {
    return (
      <a
        className="cursor-pointer text-xl text-moona-black transition-colors duration-300 ease-in-out hover:text-moona-purple hover:underline dark:text-moona-white dark:hover:text-moona-purple"
        href={href}
        target={target}
      >
        {text}
      </a>
    );
  };

  return (
    <>
      <button className="z-30 hover:text-moona-purple">
        {state ? (
          // close button if sidebar is open
          <Icon
            icon="ic:round-close"
            onClick={toggleDrawer(false)}
            className="h-8 w-8 cursor-pointer"
          />
        ) : (
          <Icon
            icon="gg:menu-right"
            className="h-8 w-8 cursor-pointer"
            onClick={toggleDrawer(true)}
          />
        )}
      </button>
      <SwipeableDrawer
        anchor={"right"}
        open={state}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        sx={{ zIndex: 20 }}
        className="md: hidden"
      >
        <div className="flex h-full w-52 flex-col items-center gap-12 bg-moona-white p-4 pb-14 pt-28 dark:bg-anya-darkPurple dark:text-moona-white">
          {menuItem("Projects", "/projects")}
          {menuItem("Blog", "/blog")}
          {menuItem("Resume", "/resume.pdf", "_blank")}
        </div>
      </SwipeableDrawer>
    </>
  );
}

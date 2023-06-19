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

  const menuItem = (text: string, href: string) => {
    return (
      <a
        className="text-xl text-moona-darkPurple dark:text-moona-white"
        href={href}
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
      >
        <div className="flex h-full w-40 flex-col items-center justify-evenly gap-12 bg-moona-white p-4 pb-14 pt-32 dark:bg-anya-darkPurple dark:text-moona-white">
          {/* <Icon
            icon="ic:round-close"
            onClick={toggleDrawer(false)}
            className="h-8 w-8 cursor-pointer"
          /> */}
          {menuItem("Projects", "/projects")}
          {menuItem("Blog", "/blog")}
          <div className="flex-grow" />
          <ResumeButton />
        </div>
      </SwipeableDrawer>
    </>
  );
}

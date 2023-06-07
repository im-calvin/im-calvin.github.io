import React, { useState } from "react";
import {
  SwipeableDrawer,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Article, Description, GitHub, Info, SvgIconComponent } from "@mui/icons-material";
import ResumeButton from "./ResumeButton";

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
      <button
        className="flex h-8 w-8 flex-col place-content-evenly items-end"
        onClick={toggleDrawer(true)}>
        <div className="w-8 border border-red-700" />
        <div className="w-6 border border-red-700" />
        <div className="w-8 border border-red-700" />
      </button>
      <SwipeableDrawer
        anchor={"right"}
        open={state}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}>
        <div className="flex h-full w-40 flex-col items-center justify-evenly gap-10 p-4">
          {menuItem("About", "/about")}
          {menuItem("Blog", "/blog")}
          {menuItem("Projects", "/projects")}
          <ResumeButton />
        </div>
      </SwipeableDrawer>
    </>
  );
}

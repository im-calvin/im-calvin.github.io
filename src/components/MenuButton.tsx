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
import { Article, GitHub, Info, SvgIconComponent } from "@mui/icons-material";

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

  const menuItem = (text: string, MenuIcon: SvgIconComponent, href: string) => {
    return (
      <a href={href}>
        <ListItem key={text} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <MenuIcon />
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItemButton>
        </ListItem>
      </a>
    );
  };

  const menu = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}>
      <List>
        {menuItem("About", Info, "/")}
        {menuItem("Blog", Article, "/blog")}
        {menuItem("Projects", GitHub, "/projects")}
      </List>
    </Box>
  );

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
        {menu()}
      </SwipeableDrawer>
    </>
  );
}

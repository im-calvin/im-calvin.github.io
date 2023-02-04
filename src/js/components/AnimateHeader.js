import React, { useState } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grow from "@mui/material/Grow";
import MenuIcon from "@mui/icons-material/Menu";
import Header from "./Header";
import "../../css/sun.css";

const sidebar = (
  <Paper>
    <Box component={Header}></Box>
  </Paper>
);

export default function AnimateHeader() {
  const [checked, setChecked] = useState(true);

  const handleChange = () => {
    console.log(checked);
    setChecked((prev) => !prev);
  };

  return (
    <Box sx={{ width: 0.1 }}>
      <MenuIcon className="sun" onClick={handleChange} />
      <Grow
        appear={true}
        in={checked}
        style={{ transformOrigin: "0 0 0" }} // TODO: location of menu
        {...(checked ? { timeout: "auto" } : {})}
      >
        {sidebar}
      </Grow>
    </Box>
  );
}

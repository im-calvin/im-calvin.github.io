import React, { useState } from "react";
import Box from "@mui/material/Box";
import Switch from "@mui/material/Switch";
import Paper from "@mui/material/Paper";
import Grow from "@mui/material/Grow";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import Header from "./Header";
import { createTheme } from "@mui/material/styles";

const icon = (
  <Paper sx={{ m: 0 }}>
    <Box component={Header} sx={{ width: "9%" }}></Box>
  </Paper>
);

export default function SimpleGrow() {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    console.log(checked);
    setChecked((prev) => !prev);
  };

  return (
    <Box sx={{ height: 180 }}>
      <MenuIcon onClick={handleChange} />
      <Box sx={{ display: "flex" }}>
        {/* Conditionally applies the timeout prop to change the entry speed. */}
        <Grow
          in={checked}
          style={{ transformOrigin: "0 0 0" }}
          {...(checked ? { timeout: 1000 } : {})}
        >
          {icon}
        </Grow>
      </Box>
    </Box>
  );
}

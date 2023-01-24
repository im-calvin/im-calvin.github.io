import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import Header from "./Header";
import Box from "@mui/material/Box";
import Grow from "@mui/material/Grow";
import { Paper } from "@mui/material";

export default function TemporaryDrawer(props) {
  const [checked, setChecked] = useState(false);
  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  const load = (
    <Paper sx={{ m: 1 }}>
      <Box component="svg" sx={{ width: "200px", height: "1000px" }}></Box>;
    </Paper>
  );
  return (
    <Box sx={{ height: "100%" }}>
      <MenuIcon onClick={handleChange} />
      <Box sx={{ display: "flex" }}>
        <Grow
          in={checked}
          style={{ transformOrigin: "0 0 0" }} // TODO: location of menu
          timeout={2000}
        >
          {load}
        </Grow>
      </Box>
    </Box>
  );
}

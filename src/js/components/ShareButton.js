import LaunchIcon from "@mui/icons-material/Launch";
import IconButton from "@mui/material/IconButton";
import React from "react";

export default function ShareButton(props) {
  return (
    <IconButton size="small" href={props.link}>
      <LaunchIcon fontSize="" />
    </IconButton>
  );
}

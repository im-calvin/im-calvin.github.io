import { Link } from "react-router-dom";
import WorkIcon from "@mui/icons-material/Work";
import { Grid } from "@mui/material";
import { Home } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";

export default function NavMenu(props) {
  return (
    <Grid
      display="grid"
      gridTemplateColumns="1fr auto"
      gridAutoFlow="row"
      padding={2}
      alignItems="center"
      // sx={{ width: 250 }}
      // role="presentation"
      // onClick={toggleDrawer(anchor, false)}
      // onKeyDown={toggleDrawer(anchor, false)}
    >
      {/* <MenuIcon
      // onClick={toggleDrawer(anchor, false)}
      // onKeyDown={toggleDrawer(anchor, false)}
      /> */}
      <Home />
      <button className="banner-button">
        <Link to="/" className="nav-item button">
          HOME
        </Link>
      </button>

      <WorkIcon />
      <button className="banner-button">
        <Link to="/projects" className="nav-item button">
          PROJECTS
        </Link>
      </button>
    </Grid>
  );
}

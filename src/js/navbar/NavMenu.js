import { Link } from "react-router-dom";
import WorkIcon from "@mui/icons-material/Work";
import { Grid } from "@mui/material";
import { Home } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";

export default function NavMenu(props) {
  return (
    <Grid
      display="grid"
      gridTemplateColumns="auto auto"
      gridAutoFlow="row"
      padding={2}
      alignItems="center">
      <Link to="/" className="nav-item button">
        <Home />
      </Link>

      <button className="banner-button">
        <Link to="/" className="nav-item button">
          HOME
        </Link>
      </button>

      <Link to="/projects" className="nav-item button">
        <WorkIcon />
      </Link>
      <button className="banner-button">
        <Link to="/projects" className="nav-item button">
          PROJECTS
        </Link>
      </button>
    </Grid>
  );
}

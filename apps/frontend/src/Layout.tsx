import { ReactNode } from "react";
import { Avatar, Box, Paper } from "@mui/material";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import ShuffleIcon from "@mui/icons-material/Star";
import { Link } from "react-router-dom";

import BBCIcon from "./utils/BBCIcon";
import { NavigationDigest } from "./models/types";
import { deepOrange } from "@mui/material/colors";

interface LayoutProps {
  children: ReactNode;
  getDigestData?: (eventValue: NavigationDigest) => void;
}

const Layout = ({ children, getDigestData }: LayoutProps) => {
  return (
    <div className="App">
      <header
        className="App-header"
        style={{ display: "flex", justifyContent: "center", marginTop: 20 }}
      >
        <BBCIcon />

        <Link to="/settings" style={{ textDecoration: "none" }}>
          <Avatar sx={{
            bgcolor: deepOrange[500],
            position: "fixed",
            right: 10, top: 7
          }}>N</Avatar>
        </Link>
      </header>
      <Box sx={{ mb: 5 }}>{children}</Box>
      <Box>
        <Paper
          sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
          elevation={3}
        >
          <BottomNavigation
            showLabels
            onChange={(event, newValue) => {
              if (getDigestData) {
                getDigestData(newValue);
              }
            }}
          >
            <Link to="/">
              <BottomNavigationAction label="Home" icon={<HomeIcon />} />
            </Link>
            <BottomNavigationAction label="Digest Shuffle" icon={<ShuffleIcon />} />
          </BottomNavigation>
        </Paper>
      </Box>
    </div>
  );
};

export default Layout;

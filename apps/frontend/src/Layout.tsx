import { ReactNode } from "react";
import { Box, Paper } from "@mui/material";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import DownloadIcon from "@mui/icons-material/Download";
import BBCIcon from "./utils/BBCIcon";
import { NavigationDigest } from "./models/types";

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
            <BottomNavigationAction label="Home" icon={<HomeIcon />} />
            <BottomNavigationAction label="Shuffle" icon={<ShuffleIcon />} />
            <BottomNavigationAction label="Settings" icon={<DownloadIcon />} />
          </BottomNavigation>
        </Paper>
      </Box>
    </div>
  );
};

export default Layout;

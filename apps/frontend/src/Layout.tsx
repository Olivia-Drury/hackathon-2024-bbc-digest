import { ReactNode } from "react";
import { Avatar, Box, Paper } from "@mui/material";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import ShuffleIcon from "@mui/icons-material/Star";
import { Link, useNavigate } from "react-router-dom";
import SettingsIcon from "@mui/icons-material/Settings";
import BBCIcon from "./utils/BBCIcon";
import { NavigationDigest } from "./models/types";
import { deepOrange } from "@mui/material/colors";

interface LayoutProps {
  children: ReactNode;
  getDigestData?: (eventValue: NavigationDigest) => void;
}

const Layout = ({ children, getDigestData }: LayoutProps) => {
  const navigate = useNavigate();
  return (
    <div className="App">
      <header
        className="App-header"
        style={{
          display: "flex",
          flex: 1,
          flexDirection: "row",
          marginTop: 20,
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexBasis: "95%",
            marginLeft: 60,
            width: "100%",
            justifyContent: "center",
          }}
        >
          <BBCIcon />
        </div>
        <div
          style={{
            display: "flex",
            flexBasis: "5%",
            width: "100%",
            justifyContent: "end",
          }}
        >
          <Link
            to="/settings"
            style={{
              textDecoration: "none",
            }}
          >
            <Avatar
              sx={{
                bgcolor: "#3223dc",
                mr: 2,
                bottom: 10,
              }}
            >
              N
            </Avatar>
          </Link>
        </div>
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
              if (newValue === 0) {
                navigate("/");
              }
              if (getDigestData) {
                getDigestData(newValue);
              }
            }}
          >
            <BottomNavigationAction label="Home" icon={<HomeIcon />} />
            <BottomNavigationAction label="Shuffle" icon={<ShuffleIcon />} />
          </BottomNavigation>
        </Paper>
      </Box>
    </div>
  );
};

export default Layout;

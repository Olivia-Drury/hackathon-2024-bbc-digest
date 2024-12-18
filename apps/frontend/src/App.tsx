import { useCallback, useEffect, useState } from "react";
import "./App.css";
import { HomeFeed, NavigationDigest } from "./models/types";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { DigestGrid } from "./components/DigestGrid";
import { useFetchDigestData } from "./utils/useFetchDigestData";

import DownloadIcon from "@mui/icons-material/Download";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HomeIcon from "@mui/icons-material/Home";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import BBCIcon from "./utils/BBCIcon";

function filteredDigestData(digestData: HomeFeed[]) {
  return digestData.filter((item: HomeFeed) => item.favourite);
}

function shuffleDigestData(digestData: HomeFeed[]) {

  const randomDigest = Math.floor(
    Math.random() * digestData.length
  );
  return digestData[randomDigest];
}

function App() {
  const { digestData } = useFetchDigestData();
  const [homeFeedData, setHomeFeedData] = useState<HomeFeed[]>(digestData);

  const getDigestData = (eventValue: NavigationDigest) => {
    if (eventValue === NavigationDigest.favourites) {
      setHomeFeedData(filteredDigestData(digestData));
    }

    if (eventValue === NavigationDigest.shuffle) {
      setHomeFeedData([shuffleDigestData(digestData)]);
    }

    if (eventValue === NavigationDigest.home) {
      setHomeFeedData(digestData);
    }
  };

  useEffect(() => {
    if (digestData) {
      setHomeFeedData(digestData);
    }
  }, [digestData]);

  return (
    <div className="App">
      <header className="App-header" style={{ marginTop: 20 }}>
        <BBCIcon />
      </header>
      <Box sx={{mb: 5}}>{<DigestGrid data={homeFeedData} />}</Box>
      <Box>
        <Paper
          sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
          elevation={3}
        >
          <BottomNavigation
            showLabels
            onChange={(event, newValue) => {
              getDigestData(newValue);
            }}
          >
            <BottomNavigationAction label="Home" icon={<HomeIcon />} />
            <BottomNavigationAction label="Shuffle" icon={<ShuffleIcon />} />
            {/* <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} /> */}
            <BottomNavigationAction label="Settings" icon={<DownloadIcon />} />
          </BottomNavigation>
        </Paper>
      </Box>
    </div>
  );
}

export default App;

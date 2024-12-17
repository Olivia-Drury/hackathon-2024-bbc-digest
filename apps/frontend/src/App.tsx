import { useEffect, useState } from "react";
import "./App.css";
import { HomeFeed, NavigationDigest } from "./models/types";
// import { DigestCard } from "./components/DigestCard";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { DigestGrid } from "./components/DigestGrid";
import { useFetchDigestData } from "./utils/useFetchDigestData";
// import RestoreIcon from '@mui/icons-material/Restore';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import LocationOnIcon from '@mui/icons-material/LocationOn';

// this function takes in an array
// will return a filter array of favourites
function filteredDigestData(digestData: HomeFeed[]) {
  return digestData.filter((item: HomeFeed) => item.favourite);
}

function shuffleDigestData(digestData: HomeFeed[]) {
  //const random = Math.floor()
  const filteredFavouriteDigest = digestData.filter(
    (item: HomeFeed) => item.favourite
  );
  const randomDigest = Math.floor(
    Math.random() * filteredFavouriteDigest.length
  );
  return filteredFavouriteDigest[randomDigest];
}

function App() {
  const [value, setValue] = useState(0);
  const { digestData } = useFetchDigestData();
  const [homeFeedData, setHomeFeedData] = useState<HomeFeed[]>(digestData);

  console.log("BUTTON VALUE: ", value);

  const getDigestDataTest = (val: string) => {
    console.log("fav or shuffle: ", val);
    if (val === "favourites") {
      console.log("fav called");
      setHomeFeedData(filteredDigestData(homeFeedData));
    } else {
      const getShuffledDigestData = shuffleDigestData(homeFeedData);
      console.log("getShuffledDigestData", getShuffledDigestData);
      setHomeFeedData([getShuffledDigestData]);
    }

    return;

    // if() {
    //   // setHomeFeedData state to digestdata.
    // }
  };

  useEffect(() => {
    // set initial data
    if (digestData) {
      setHomeFeedData(digestData); // Update homeFeedData when digestData changes
    }
  }, [digestData]);

  return (
    <div className="App">
      <header className="App-header">BBC Digest</header>

      {/*
        render either digestData or favourites based on the value of the button
      */}
      <Box>{<DigestGrid data={homeFeedData} />}</Box>
      <Box>
        <Paper
          sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
          elevation={3}
        >
          {/* <Button variant='outlined' disabled>
              Disabled
            </Button>
            <Button variant='outlined' href='#outlined-buttons'>
              Link
            </Button> */}
          <BottomNavigation
            showLabels
            onChange={(event, newValue) => {
              // 0 which is shufle
              // 1 which is fav
              const enumvalue = NavigationDigest[newValue];
              getDigestDataTest(enumvalue);
            }}
          >
            <BottomNavigationAction label="Shuffle" />
            <BottomNavigationAction label="Favorites" />
            {/* Button using the above filter function - and pass in the onClick function () */}
          </BottomNavigation>
        </Paper>
      </Box>
    </div>
  );
}

export default App;

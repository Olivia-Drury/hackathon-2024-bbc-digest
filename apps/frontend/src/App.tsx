import { useEffect, useState, useRef } from 'react';
import "./App.css";
import { HomeFeed } from './models/types';
// import { DigestCard } from "./components/DigestCard";
import { DigestGrid } from "./components/DigestGrid";
import { useFetchDigestData } from "./utils/useFetchDigestData";
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
// import RestoreIcon from '@mui/icons-material/Restore';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import LocationOnIcon from '@mui/icons-material/LocationOn';


// this function takes in an array
// will return a filter array of favourites
function filteredDigestData(digestData: HomeFeed[]) {
  return digestData.filter((item: HomeFeed) => item.favourite);
}

function App() {
  const [value, setValue] = useState(0);
  const { digestData } = useFetchDigestData();
  const [filteredData, setFilteredData] = useState<HomeFeed[]>(digestData);
  console.log("BUTTON VALUE: ", value);


  const ref = useRef<HTMLDivElement>(null);
  const [favourites, setFavourites] = useState(() => filteredDigestData(digestData));

  useEffect(
    () => {
      // (ref.current as HTMLDivElement).ownerDocument.body.scrollTop = 0;
      setFavourites(filteredDigestData(digestData));
      setFilteredData(filteredDigestData(digestData));
    },
    [value, setFavourites]
  );

  console.log('favourite cards: ', favourites);

  return (
    <div className='App'>
      <header className='App-header'>BBC Digest</header>

      {/*
        render either digestData or favourites based on the value of the button
      */}
      <Box>
        <DigestGrid data={digestData} />
      </Box>
      <Box>
        <Paper
          sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
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
              setValue(newValue);
            }}
          >
            <BottomNavigationAction label='Shuffle' />
            <BottomNavigationAction label='Favorites' />
            {/* Button using the above filter function - and pass in the onClick function () */}
          </BottomNavigation>
        </Paper>
      </Box>
    </div>
  );
}

export default App;


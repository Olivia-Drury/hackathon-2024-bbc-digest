import "./App.css";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import HomeIcon from "@mui/icons-material/Home";
import BBCIcon from "./utils/BBCIcon";
import { Button, Checkbox, Divider, FormControlLabel, FormGroup, Slider, Typography } from '@mui/material';

function Settings() {
  return (
    <div className="App">
      <Box sx={{ mb: 2 }}>{
        <h1>
          settings
        </h1>
      }
      </Box>
      <Box sx={{ m: 2 }}>
        {<p>Control how much space smart downloads use on your device (MB)</p>}
        <Slider
          aria-label="smart download use"
          defaultValue={8}
          valueLabelDisplay="on"
          step={2}
          marks
          min={0}
          max={20}
        />
        <Divider orientation="horizontal" flexItem />
      </Box>
      <Box sx={{ m: 3 }}>
        <FormGroup>
          <FormControlLabel control={<Checkbox defaultChecked />} label="Delete downloads once completed" />
          <FormControlLabel control={<Checkbox defaultChecked />} label="Allow Personalisation" />
        </FormGroup>
        <Typography variant="body1" gutterBottom>
          This makes the BBC more relevant and personal to you. For instance, when it’s on you can:
          Get personalised newsletters and recommendations about things we think you’ll like
          Pick up where you left off with programmes you’re part way through
        </Typography>
        <br />
        <Divider orientation="horizontal" flexItem />

        <p>Some cookies are essential for the BBC website to work. Others help us give you a better, more personal BBC.
        </p>
        <p><u>Change your cookie settings here</u></p>
      </Box>
      <Box>
        <Button variant="outlined">Logout</Button>
      </Box>
    </div>
  );
}

export default Settings;

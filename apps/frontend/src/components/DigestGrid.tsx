import { Box } from "@mui/material";
import Grid from "@mui/material/Grid2";

import { DigestCard } from "./DigestCard"; // Adjust the path as necessary

export const DigestGrid = () => {
  return (
    <Box sx={{ flexGrow: 1, p: 4 }}>
      {" "}
      <Grid container spacing={3} justifyContent="center" alignItems="stretch">
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <DigestCard />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <DigestCard />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <DigestCard />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <DigestCard />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <DigestCard />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <DigestCard />
        </Grid>
      </Grid>
    </Box>
  );
};

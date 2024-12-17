import { Box } from "@mui/material";
import Grid from "@mui/material/Grid2";

import { DigestCard } from "./DigestCard"; // Adjust the path as necessary
import { HomeFeed } from "../models/types";
interface DigestGridProps {
  data: HomeFeed[];
}
export const DigestGrid = ({ data }: DigestGridProps) => {
  return (
    <Box sx={{ flexGrow: 1, p: 4 }}>
      {" "}
      <Grid container spacing={3} justifyContent="center" alignItems="stretch">
        {data.map((digest) => {
          return (
            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
              <DigestCard digest={digest} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Box, Icon, IconButton, styled } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useLocation, useNavigate } from "react-router-dom";
import { iplayerSoundsEpisodeData } from "../models/types";

const StyledEpisodeCard = styled(Card)(({ theme }) => ({
  maxHeight: 300,
  borderRadius: 0,
  display: "flex", // Use flexbox layout
  flexDirection: "row",
  border: 0,
  boxShadow: "none",
}));

const DigestContent = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state;

  return (
    <div style={{ display: "flex", flex: "1", flexDirection: "column" }}>
      <Box
        sx={{
          display: "flex", // Flexbox for alignment
          flexBasis: "20%",
          padding: 2, // Add padding
        }}
      >
        <IconButton
          sx={{
            mr: 3,
            height: "100%",
          }}
          onClick={() => {
            navigate("/");
          }}
        >
          <ArrowBackIcon fontSize="large" />
        </IconButton>
        <Typography
          sx={{
            mt: 1,
            fontSize: {
              xs: "1.6rem",
              sm: "1.8rem",
              md: "2rem",
              lg: "2.2rem",
            },
            fontWeight: "600",
          }}
        >
          {data.title}
        </Typography>
        <p>{data.description}</p>
      </Box>

      {data.episodes &&
        data.episodes.map(
          (episode: iplayerSoundsEpisodeData, index: number) => {
            return (
              <StyledEpisodeCard
                onClick={() =>
                  navigate("/player", { state: { videoSrc: episode.mediaUrl } })
                }
              >
                <Card
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    border: 0,
                    boxShadow: "none",
                  }}
                >
                  <CardMedia
                    component="img"
                    sx={{ maxWidth: 170, maxHeight: 100, p: 1 }}
                    image={episode.image}
                    alt={episode.title}
                  />
                  <CardContent sx={{ flex: 1 }}>
                    <Typography
                      sx={{
                        fontSize: {
                          xs: "1rem",
                          sm: "1.2rem",
                          md: "1.4rem",
                          lg: "1.6rem",
                        },
                        alignItems: "start",
                        textAlign: "start",
                        fontWeight: "600",
                      }}
                    >
                      {`${index + 1}. ${episode.title}`}
                    </Typography>
                    <Typography
                      sx={{
                        fontWeight: "200",
                        fontSize: {
                          xs: "0.8rem",
                          sm: "1rem",
                          md: "1.2rem",
                          lg: "1.2rem",
                        },
                      }}
                    >
                      30mins
                    </Typography>
                  </CardContent>
                </Card>
              </StyledEpisodeCard>
            );
          }
        )}
    </div>
  );
};

export default DigestContent;

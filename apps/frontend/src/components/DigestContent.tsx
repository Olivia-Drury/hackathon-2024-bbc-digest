import React from "react";
import { useLocation } from "react-router-dom";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { iplayerSoundsEpisodeData } from "../models/types";
import { Box, styled } from "@mui/material";


const StyledEpisodeCard = styled(Card)(({ theme }) => ({
  maxHeight: 300,
  borderRadius: 0,
  display: 'flex', // Use flexbox layout
  flexDirection: 'row',
  boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0px 6px 18px rgba(0, 0, 0, 0.2)',
  },
}));

const DigestContent = () => {
  const location = useLocation();
  const data = location.state;

  console.log("Data from digest content: ", data);
  return (
    <div>
      <Box
        sx={{
          display: 'flex', // Flexbox for alignment
          padding: 2, // Add padding
        }}
      >

        <Typography
          sx={{
            ml: 1,
          }}
        >
        </Typography>
        <h1>{data.title}</h1>
        <p>{data.description}</p>
      </Box>
      {data.episodes && data.episodes.map((episode: iplayerSoundsEpisodeData) => {
        return (
          <StyledEpisodeCard>
            <Card
              sx={{
                display: 'flex',
                flexDirection: 'row',
              }}
            >
                <CardMedia
                  component='img'
                  sx={{ width: 151 }}
                  image={episode.image}
                  alt={episode.title}
                />
                <CardContent>
                  <Typography gutterBottom variant='h5' component='div'>
                    {episode.title}
                  </Typography>
                </CardContent>

            </Card>
          </StyledEpisodeCard>
        );
      })}
    </div>
  );
};

export default DigestContent;

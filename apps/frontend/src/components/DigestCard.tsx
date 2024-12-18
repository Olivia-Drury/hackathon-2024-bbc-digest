import { useFetchCatergoryData } from "../hooks/useFetchDigestData";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import AppIcons from "../utils/AppIcons";
import { styled } from "@mui/material/styles";
import { HomeFeed, iPlayerData, newsData, soundsData } from "../models/types";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 450,
  borderRadius: 0,
  display: "flex", // Use flexbox layout
  flexDirection: "column",
  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: "0px 6px 18px rgba(0, 0, 0, 0.2)",
  },
}));
interface DigestCardProps {
  digest: HomeFeed;
}
export const DigestCard = ({ digest }: DigestCardProps) => {
  const getDigestAppCategory = digest.category.split("-")[0];
  const navigate = useNavigate();

  const { fetchCatergoryData, catergoryData } = useFetchCatergoryData();

  const handleClickCard = () => {
    fetchCatergoryData(digest.category, digest.id);
  };

  useEffect(() => {
    if (catergoryData) {
      navigate(`/${digest.category}/${digest.id}`, { state: catergoryData });
    }
  }, [catergoryData]);

  console.log("CONTENT Data: ", catergoryData);

  return (
    <StyledCard
      sx={{
        height: {
          xs: 320,
          sm: 320,
          md: 350,
          lg: 350,
        },
      }}
      onClick={handleClickCard}
    >
      <CardMedia
        component="img"
        height="200"
        image={digest.data.image}
        alt={digest.data.title}
      />
      <CardHeader
        action={<IconButton aria-label="settings"></IconButton>}
        title={
          <Typography
            variant="h6"
            sx={{
              fontWeight: "800",
              fontSize: {
                xs: "1rem",
                sm: "1rem",
                md: "1rem",
                lg: "1.2rem",
              },
            }}
          >
            {digest.data.title}
          </Typography>
        }
      />
      <Box
        sx={{
          display: "flex", // Flexbox for alignment
          padding: 2, // Add padding
        }}
      >
        <AppIcons app={getDigestAppCategory} />
        <Typography
          sx={{
            ml: 1,
          }}
        >
          {getDigestAppCategory === "iplayer"
            ? "iPlayer"
            : getDigestAppCategory.charAt(0).toUpperCase() +
              getDigestAppCategory.slice(1)}
        </Typography>
      </Box>
    </StyledCard>
  );
};

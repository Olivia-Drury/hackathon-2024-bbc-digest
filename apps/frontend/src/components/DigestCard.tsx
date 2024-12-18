import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import AppIcons from "../utils/AppIcons";
import { styled } from "@mui/material/styles";
import { HomeFeed } from "../models/types";
import { Box } from "@mui/material";

const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 450,
  height: 300,
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
  return (
    <StyledCard>
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
                xs: "1rem", // Small screens (mobile)
                sm: "1.25rem", // Small devices (tablets)
                md: "1.5rem", // Medium devices (desktop)
                lg: "1.75rem", // Larger screens
              },
            }}
          >
            {digest.data.title}
          </Typography>
        }
        // avatar={<AppIcons app={getDigestAppCategory} />}
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
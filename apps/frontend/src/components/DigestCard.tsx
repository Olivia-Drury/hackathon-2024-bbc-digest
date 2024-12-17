import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import AppIcons from "../utils/AppIcons";
import { styled } from "@mui/material/styles";
import { HomeFeed } from "../models/types";

// interface ExpandMoreProps extends IconButtonProps {
//   expand: boolean;
// }

// const ExpandMore = styled((props: ExpandMoreProps) => {
//   const { expand, ...other } = props;
//   return <IconButton {...other} />;
// })(({ theme }) => ({
//   marginLeft: "auto",
//   transition: theme.transitions.create("transform", {
//     duration: theme.transitions.duration.shortest,
//   }),
//   variants: [
//     {
//       props: ({ expand }) => !expand,
//       style: {
//         transform: "rotate(0deg)",
//       },
//     },
//     {
//       props: ({ expand }) => !!expand,
//       style: {
//         transform: "rotate(180deg)",
//       },
//     },
//   ],
// }));
const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 450,
  height: 350,
  borderRadius: theme.shape.borderRadius * 2,
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
  //   const [expanded, setExpanded] = React.useState(false);

  //   const handleExpandClick = () => {
  //     setExpanded(!expanded);
  //   };
  const getDigestAppCategory = digest.category.split("-")[0];
  return (
    <StyledCard
    // sx={{
    //   p: 2,
    //   maxWidth: 350,
    //   borderRadius: 2,
    // }}
    >
      <CardHeader
        avatar={<AppIcons app={getDigestAppCategory} />}
        action={<IconButton aria-label="settings"></IconButton>}
        title={
          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
              m: 2,
            }}
          >
            {digest.data.title}
          </Typography>
        }
        sx={{ display: "flex", flexDirection: "column" }}
      />

      <CardMedia
        component="img"
        height="200"
        image={digest.data.image}
        alt={digest.data.title}
        sx={{
          marginTop: "auto",
        }}
      />
    </StyledCard>
  );
};

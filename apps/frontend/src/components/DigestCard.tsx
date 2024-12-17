import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import AppIcons from "../utils/AppIcons";
import { styled } from "@mui/material/styles";

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
  maxWidth: 350,
  borderRadius: theme.shape.borderRadius * 2,
  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: "0px 6px 18px rgba(0, 0, 0, 0.2)",
  },
}));
export const DigestCard = () => {
  //   const [expanded, setExpanded] = React.useState(false);

  //   const handleExpandClick = () => {
  //     setExpanded(!expanded);
  //   };

  return (
    <StyledCard
    // sx={{
    //   p: 2,
    //   maxWidth: 350,
    //   borderRadius: 2,
    // }}
    >
      <CardHeader
        avatar={<AppIcons app="news" />}
        action={<IconButton aria-label="settings"></IconButton>}
        title={
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            Councils to be merged in major local government shake-up
          </Typography>
        }
      />

      <CardMedia
        component="img"
        height="194"
        image="https://ichef.bbci.co.uk/ace/standard/976/cpsprodpb/3bbc/live/3a0be170-bb11-11ef-a25a-510b123ed954.png.webp"
        alt="View over Scarborough in North Yorkshire"
      />
    </StyledCard>
  );
};

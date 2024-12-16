import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import * as React from "react";
import BBCNewsIcon from "./BBCNewsIcon";

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

export const DigestCard = () => {
  //   const [expanded, setExpanded] = React.useState(false);

  //   const handleExpandClick = () => {
  //     setExpanded(!expanded);
  //   };

  return (
    <Card
      sx={{
        p: 2,
        maxWidth: 400,
      }}
    >
      <CardHeader
        avatar={<BBCNewsIcon />}
        action={<IconButton aria-label="settings"></IconButton>}
        title={
          <Typography variant="h6">
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
    </Card>
  );
};

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Box, IconButton } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

const VideoPlayer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const videoSrc = location.state?.videoSrc;

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          padding: 2,
          backgroundColor: "#000",
        }}
      >
        <IconButton onClick={() => navigate(-1)} sx={{ marginRight: 2 }}>
          <ArrowBackIcon fontSize="large" style={{ color: "white" }} />
        </IconButton>
      </Box>
      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#000",
        }}
      >
        {videoSrc ? (
          <video
            controls
            style={{ maxWidth: "100%", maxHeight: "100%" }}
            src={videoSrc}
          >
            Your browser does not support the video tag.
          </video>
        ) : (
          <p>No video source provided</p>
        )}
      </Box>
    </div>
  );
};

export default VideoPlayer;

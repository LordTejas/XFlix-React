import "./VideoPlayer.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import Typography from "@mui/material/Typography";

function VideoPlayer({ title, releaseDate, videoLink, contentRating, votes }) {
  const fetchEmbeddedUrl = (url) => {
    let newUrl = "https://www.youtube.com/embed/";

    let extractedVideoHash = url.match(/watch\?v=(?<vHash>[\w-]+)&/);

    newUrl += extractedVideoHash.groups["vHash"];

    // console.log(url, newUrl, extractedVideoHash.groups);

    return newUrl;
  };

  const UpVoteButton = () => (
    <Button
      sx={{
        color: "common.white",
        bgcolor: "button.main",
        "&:hover": {
          bgcolor: "button.dark",
        },
      }}
      variant="contained"
      startIcon={<ThumbUpIcon />}
    >
      {votes.upVotes}
    </Button>
  );

  const DownVoteButton = () => (
    <Button
      sx={{
        marginLeft: "1rem",
        color: "common.white",
        bgcolor: "button.main",
        "&:hover": {
          bgcolor: "button.dark",
        },
      }}
      variant="contained"
      startIcon={<ThumbDownIcon />}
    >
      {votes.downVotes}
    </Button>
  );

  return (
    <Box
      sx={{
        color: "primary.contrastText",
        bgcolor: "primary.dark",
      }}
      className="video-player"
      py={4}
    >
      <iframe
        className="video-frame"
        src={"https://" + videoLink}
        title={title}
        frameBorder="0"
        allowFullScreen
        ng-show="showvideo"
      ></iframe>

      <Box
        className="video-action-area"
        sx={{
          borderBottom: "1px solid white",
        }}
      >
        <Box className="video-action-description">
          <Typography variant="h5" className="video-title">
            {title}
          </Typography>

          <Typography variant="caption" className="video-desc">
            {contentRating + " • " + releaseDate}
          </Typography>
        </Box>

        <Box className="video-action-vote">
          <UpVoteButton />
          <DownVoteButton />
        </Box>
      </Box>
    </Box>
  );
}

export default VideoPlayer;

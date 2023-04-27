import "./VideoPage.css";
import Header from "./Header";
import VideoPanel from "./VideoPanel";
import VideoPlayer from "./VideoPlayer";
import Box from "@mui/material/Box";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import config from "../ipConfig.json";

function VideoPage() {
  const [video, setVideo] = useState(null);
  const [videos, setVideos] = useState([]);
  const params = useParams();

  const findVideoById = async (pk) => {
    const videoUrl = `${config.endpoint}/v1/videos/${pk}`;

    try {
      const v = await axios.get(videoUrl);

      return v.data;
    } catch (e) {
      return null;
    }
  };

  // Load Video
  useEffect(async () => {
    const pk = params.videoId;
    setVideo(await  findVideoById(pk));
  }, []);

  useEffect(async () => {
    const fetchVideosByGenre = async (genre) => {
      const endUrl = `${config.endpoint}/v1/videos?genres=${genre}`;

      try {
        const v = await axios.get(endUrl);
        console.log(genre, v);

        setVideos(v.data.videos);
      } catch (e) {
        console.log(e);
      }
    };

    if (video) {
      const genre = video.genre;
      fetchVideosByGenre(genre);
    }
  }, [video]);

  return (
    <Box className="video-page">
      <Header />

      {video && VideoPlayer(video)}

      <VideoPanel videos={videos} />
    </Box>
  );
}

export default VideoPage;

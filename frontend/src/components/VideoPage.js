import './VideoPage.css';
import Header from './Header';
import VideoPlayer from './VideoPlayer';
import Box from '@mui/material/Box';
import { useState, useEffect } from 'react';
import {useLocation, useParams} from "react-router-dom";

import Videos from '../data/videos';


function VideoPage() {

    const [video, setVideo] = useState(null);
    const params = useParams();

    const findVideoById = (pk) => {
        const videos = Videos.data;

        const n = videos.length;
        if (!n) return null;

        let i = 0;
        while (i < n) {
            if (videos[i].id === pk) return videos[i];
            i++;
        }

        return null;
    };


    // Load Video
    useEffect(() => {
        const pk = Number.parseInt(params.videoId);
        setVideo(findVideoById(pk));
    }, []);

    return (
        <Box className="video-page">
            <Header />

            {video && VideoPlayer(video)}

        </Box>
    );
}

export default VideoPage;
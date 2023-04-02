import './VideoPage.css';
import Header from './Header';
import VideoPlayer from './VideoPlayer';
import Box from '@mui/material/Box';
import { useState, useEffect } from 'react';

import Videos from '../data/videos';
import { alignProperty } from '@mui/material/styles/cssUtils';


function VideoPage() {



    return (
        <Box>
            <Header />

            <VideoPlayer />

        </Box>
    );
}

export default VideoPage;
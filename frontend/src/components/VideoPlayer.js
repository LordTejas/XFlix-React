import './VideoPage.css';
import Box from '@mui/material/Box';
import { useState, useEffect } from 'react';

import Videos from '../data/videos';
import { alignProperty } from '@mui/material/styles/cssUtils';


function VideoPlayer({title, upload_date, url}) {


    return (
        <Box>
            <iframe width="420" height="315"
            src={url}
            title={title}>
            </iframe>
        </Box>
    );
}

export default VideoPlayer;
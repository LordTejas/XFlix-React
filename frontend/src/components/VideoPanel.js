import './VideoPanel.css';
import React, { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

export default function VideoPanel({videos, c}) {


    const videoTab = (video) => {

        return (
            <Grid item
            xs={6}
            md={4}
            lg={3}
            className="video-tab"
            key={video}
            >
                <Card>
                    <CardMedia
                    sx={{ height: 140 }}
                    image="https://www.shutterstock.com/image-vector/video-player-template-web-mobile-260nw-1710114787.jpg"
                    title="video"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        Video_{video}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            );
    }

    return (
        <Box className="video-panel">
            <Grid container spacing={2} className="video-grid">
                {videos.map(videoTab)}
            </Grid>
        </Box>
    );
};

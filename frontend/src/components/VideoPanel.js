import './VideoPanel.css';
import React, { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';


export default function VideoPanel({videos, c}) {


    const VideoCard = ({id, title, upload_date, thumbnail}) => {

        return (

            // <Card>
            // <CardActionArea>
            //     <CardMedia
            //     sx={{ height: 140 }}
            //     image="https://www.shutterstock.com/image-vector/video-player-template-web-mobile-260nw-1710114787.jpg"
            //     title="video"
            //     className="video-thumbnail"
            //     />
            //     <CardContent>
            //         <Typography gutterBottom variant="h5" component="div">
            //         Video_{desc}
            //         </Typography>
            //     </CardContent>
            //     </CardActionArea>
            // </Card>

            <Box className="video-card">
                <img
                // sx={{ height: 140 }}
                src={thumbnail}
                alt="video"
                className="video-card-thumbnail"
                />

                <Typography variant="h6" className="video-card-genre"> {title} </Typography>

                <Typography variant="caption" className="video-card-title"> {upload_date} </Typography>

            </Box>
        );
    }

    const videoTab = (video) => {

        return (
            <Grid item
            xs={6}
            md={4}
            lg={3}
            className="video-tab"
            key={video.id}
            >
               {VideoCard(video)}
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

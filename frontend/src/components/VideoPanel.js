import './VideoPanel.css';
import React, { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';


export default function VideoPanel({videos}) {

    const VideoCard = ({id, title, releaseDate, contentRating, previewImage}) => {

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

            <Link
            href={`/video/${id}`}>
                <Box
                sx={{
                    color: 'common.white',
                }}
                className="video-card">
                    <img
                    // sx={{ height: 140 }}
                    src={previewImage}
                    alt="video"
                    className="video-card-thumbnail"
                    />

                    <Typography variant="h6" className="video-card-title"> {title} </Typography>

                    <Typography variant="caption" className="video-card-timestamp"> {contentRating} • {releaseDate} </Typography>

                </Box>
            </Link>
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
        <Box
        className="video-panel"
        sx={{
            bgcolor: 'primary.dark', 
        }}
        >
            <Grid container spacing={2} className="video-grid">
                {videos && videos.map(videoTab)}
            </Grid>
        </Box>
    );
};

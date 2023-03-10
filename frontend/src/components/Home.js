import './Home.css';
import Header from './Header';
import GenrePanel from './GenrePanel';
import VideoPanel from './VideoPanel';
import Box from '@mui/material/Box';
import { useState, useEffect } from 'react';

function Home()  {

    const genres = ["all", "education", "sports", "comedy", "lifestyle"];
    const ratings = ["any", "7+", "12+", "16+", "18+"];

    const [videos, setVideos] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    const [currentGenres, setCurrentGenres] = useState([genres[0]]);
    const [currentRatings, setCurrentRatings] = useState([ratings[0]]);
    const [sortByUploadDate, setSortByUploadDate] = useState(true);


    /*
    Load Videos from API
    simulation
    */
  //  useEffect((videos) => {
    
  //  });


    return (
      <Box>
        
        <Header showInstallButton />
        
        <GenrePanel
        genres={genres}
        ratings={ratings}
        currentGenres={currentGenres}
        setCurrentGenres={setCurrentGenres}
        currentRatings={currentRatings}
        setCurrentRatings={setCurrentRatings}
        sortByUploadDate={sortByUploadDate}
        setSortByUploadDate={setSortByUploadDate}
        />
        
        <VideoPanel
        videos={videos}
        c={currentGenres}
        />

      </Box>
    );
};

export default Home;
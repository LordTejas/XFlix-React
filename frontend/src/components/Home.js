import './Home.css';
import Header from './Header';
import GenrePanel from './GenrePanel';
import VideoPanel from './VideoPanel';
import VideoPlayer from './VideoPlayer';
import Box from '@mui/material/Box';
import { useState, useEffect } from 'react';

import Videos from '../data/videos';
import { alignProperty } from '@mui/material/styles/cssUtils';


function Home()  {

    const genres = ["all", "education", "sports", "comedy", "lifestyle"];
    const ratings = ["any", "7+", "12+", "16+", "18+"];

    const [videos, setVideos] = useState(Videos.data);
    const [currentGenres, setCurrentGenres] = useState([genres[0]]);
    const [currentRatings, setCurrentRatings] = useState([ratings[0]]);
    const [sortByUploadDate, setSortByUploadDate] = useState(true);
    
  

    const applyFilters = (videos) => {
      
      const getFilteredVideos = (video) => {
        return currentGenres.includes("all") || currentGenres.includes(video.genre.toLowerCase());
      }

      const sortVideosByUploadDate = (videos) => {
        videos.sort((v1, v2) => {
          return (new Date(v1.upload_date) > new Date(v2.upload_date)) ? 1 : -1;
        });
      }

      const sortVideosByTitle = (videos) => {
        videos.sort((v1, v2) => {
          return v1.title.localeCompare(v2.title);
        });
      }
      
      let v = Videos.data;
      
      v = v.filter(getFilteredVideos);
      if (sortByUploadDate) {
        sortVideosByUploadDate(v);
      } else {
        sortVideosByTitle(v);
      }

      return v;
    }

    useEffect((currentGenres) => {
      setVideos(applyFilters(Videos.data));
    })

    useEffect((sortByUploadDate) => {
      setVideos(applyFilters(Videos.data));
    })

    /*
    Load Videos from API
    simulation
    */
  //  useEffect((videos) => {
    
  //  });


    return (
      <Box className="home-panel">
        
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

        {(videos) && VideoPlayer(videos[0])}

      </Box>
    );
};

export default Home;
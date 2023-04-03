import './Home.css';
import Header from './Header';
import GenrePanel from './GenrePanel';
import VideoPanel from './VideoPanel';
import VideoPlayer from './VideoPlayer';
import UploadForm from './UploadForm';
import SearchBar from './SearchBar';
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

    const [showUploadForm, setUploadForm] = useState(false);
    
  

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
      
      console.log(v);

      v = v.filter(getFilteredVideos);
      if (sortByUploadDate) {
        sortVideosByUploadDate(v);
      } else {
        sortVideosByTitle(v);
      }

      return v;
    }

    // useEffect((currentGenres) => {
    //   setVideos(applyFilters(Videos.data));
    // })

    useEffect(() => {
      setVideos(applyFilters(Videos.data));
    }, [currentGenres, sortByUploadDate]);

    /*
    Load Videos from API
    simulation
    */
  //  useEffect((videos) => {
    
  //  });


    return (
      <Box 
      className="home-panel"
      sx={{
        bgcolor: 'primary.dark', 
      }}
      >
        
        <Header children={SearchBar} showUplaodForm={showUploadForm} setUploadForm={setUploadForm} />
        
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

        {showUploadForm && UploadForm(setUploadForm)}

      </Box>
    );
};

export default Home;
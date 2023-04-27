import './Home.css';
import Header from './Header';
import GenrePanel from './GenrePanel';
import VideoPanel from './VideoPanel';
import UploadForm from './UploadForm';
import SearchBar from './SearchBar';
import Box from '@mui/material/Box';
import { useState, useEffect } from 'react';
import config from '../ipConfig.json';
import axios from 'axios';


function Home()  {

    const genres = ["All", "Education", "Sports", "Comedy", "Lifestyle"];
    const ratings = ["Anyone", "7+", "12+", "16+", "18+"];

    const [search, setSearch] = useState("");
    const [videos, setVideos] = useState([]);
    const [searchResults, setSearchResults] = useState([]);
    const [currentGenres, setCurrentGenres] = useState([genres[0]]);
    const [currentRating, setCurrentRating] = useState([ratings[0]]);
    const [sortByUploadDate, setSortByUploadDate] = useState(true);
    const [showUploadForm, setUploadForm] = useState(false);


    useEffect(() => {
      if (currentGenres.length === 0) setCurrentGenres([genres[0]]);
      fetchVideos();
    }, [currentGenres, currentRating]);

    useEffect(() => {
      fetchVideos();
    }, [sortByUploadDate]);

    useEffect(() => {
      handleSearch(search);
    }, [search])

    const handleSearchChange = (e) => {
      setSearch(e.target.value);
    }

    const handleSearch = (search) => {
      
      if (search.length === 0) {
        setSearchResults([]);
        return;
      }
      
      const searchPattern = new RegExp(search, "i");

      const filteredVideos = videos.filter((video) => {
        return video.title.search(searchPattern) !== -1;
      })

      setSearchResults(filteredVideos);
    }

    function handleOpenUploadForm() {
      setUploadForm(true);
    };

    function handleCloseUploadForm() {
      setUploadForm(false);
    };

    const fetchVideos = async () => {
      const videosUrl = `${config.endpoint}/v1/videos?genres=${currentGenres}&contentRating=${encodeURIComponent(currentRating)}`

      try {
        let v = await axios.get(videosUrl);
        
        const videos = await sortVideos(v.data.videos);
        setVideos(videos);

      } catch(e) {
        setVideos([]);
      }

    }


    const sortVideos = (videos) => {
      
      // Manual Filtering
      const getFilteredVideos = (video) => {
        return currentGenres.includes("all") || currentGenres.includes(video.genre.toLowerCase());
      }

      // API Call is too expensive for same data
      // That's why I am using in built sort
      const sortVideosByUploadDate = (videos) => {
        videos.sort((v1, v2) => {
          return (new Date(v1.releaseDate) > new Date(v2.releaseDate)) ? 1 : -1;
        });
      }

      const sortVideosByTitle = (videos) => {
        videos.sort((v1, v2) => {
          return v1.title.localeCompare(v2.title);
        });
      }

      if (sortByUploadDate) {
        sortVideosByUploadDate(videos);
      } else {
        sortVideosByTitle(videos);
      }

      return videos;
    }



    return (
      <Box 
      className="home-panel"
      sx={{
        bgcolor: 'primary.dark', 
      }}
      >
        
        <Header children={SearchBar({search, handleSearchChange})} handleOpenUploadForm={handleOpenUploadForm} showUploadButton />
        
        <GenrePanel
        genres={genres}
        ratings={ratings}
        currentGenres={currentGenres}
        setCurrentGenres={setCurrentGenres}
        currentRating={currentRating}
        setCurrentRating={setCurrentRating}
        sortByUploadDate={sortByUploadDate}
        setSortByUploadDate={setSortByUploadDate}
        />
        
        <VideoPanel
        videos={search.length === 0 ? videos : searchResults}
        />

        {showUploadForm && <UploadForm open={showUploadForm} handleClose={handleCloseUploadForm} videos={videos} setVideos={setVideos} />}

      </Box>
    );
};

export default Home;
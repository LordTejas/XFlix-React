import "./Home.css";
import Header from "./Header";
import GenrePanel from "./GenrePanel";
import VideoPanel from "./VideoPanel";
import UploadForm from "./UploadForm";
import SearchBar from "./SearchBar";
import Box from "@mui/material/Box";
import { useState, useEffect } from "react";
import config from "../ipConfig.json";
import axios from "axios";

function Home() {
  const genres = ["All", "Education", "Sports", "Comedy", "Lifestyle"];
  const ratings = ["Anyone", "7+", "12+", "16+", "18+"];
  const sortByValues = [
    { id: "release-date-option", value: "releaseDate", label: "Release Date" },
    { id: "view-count-option", value: "viewCount", label: "View Count" },
  ];

  const [search, setSearch] = useState("");
  const [videos, setVideos] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [currentGenres, setCurrentGenres] = useState([genres[0]]);
  const [currentRating, setCurrentRating] = useState([ratings[0]]);
  const [sortBy, setSortBy] = useState(sortByValues[0].value);
  const [showUploadForm, setUploadForm] = useState(false);

  useEffect(() => {
    if (currentGenres.length === 0) setCurrentGenres([genres[0]]);
    fetchVideos();
  }, [currentGenres, currentRating, sortBy]);

  useEffect(() => {
    handleSearch(search);
  }, [search]);

  const handleSortByChange = (e) => {
    setSortBy(e.target.value);
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSearch = (search) => {
    if (search.length === 0) {
      setSearchResults([]);
      return;
    }

    const searchPattern = new RegExp(search, "i");

    const filteredVideos = videos.filter((video) => {
      return video.title.search(searchPattern) !== -1;
    });

    setSearchResults(filteredVideos);
  };

  function handleOpenUploadForm() {
    setUploadForm(true);
  }

  function handleCloseUploadForm() {
    setUploadForm(false);
  }

  const fetchVideos = async () => {
    const videosUrl = `${
      config.endpoint
    }/v1/videos?genres=${currentGenres}&contentRating=${encodeURIComponent(
      currentRating
    )}&sortBy=${sortBy}`;

    try {
      let v = await axios.get(videosUrl);
      setVideos(v.data.videos);
    } catch (e) {
      setVideos([]);
    }
  };

  return (
    <Box
      className="home-panel"
      sx={{
        bgcolor: "primary.dark",
      }}
    >
      <Header
        children={SearchBar({ search, handleSearchChange })}
        handleOpenUploadForm={handleOpenUploadForm}
        showUploadButton
      />

      <GenrePanel
        genres={genres}
        ratings={ratings}
        currentGenres={currentGenres}
        setCurrentGenres={setCurrentGenres}
        currentRating={currentRating}
        setCurrentRating={setCurrentRating}
        sortBy={sortBy}
        handleSortByChange={handleSortByChange}
        sortByValues={sortByValues}
      />

      <VideoPanel videos={search.length === 0 ? videos : searchResults} />

      {showUploadForm && (
        <UploadForm
          open={showUploadForm}
          handleClose={handleCloseUploadForm}
          videos={videos}
          setVideos={setVideos}
        />
      )}
    </Box>
  );
}

export default Home;

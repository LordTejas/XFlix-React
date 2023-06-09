import "./GenrePanel.css";
import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function GenrePanel({
  genres,
  ratings,
  currentGenres,
  setCurrentGenres,
  currentRating,
  setCurrentRating,
  sortBy,
  handleSortByChange,
  sortByValues,
}) {
  const genreItem = (genre) => {
    return (
      <Box
        className={
          currentGenres.includes(genre)
            ? "radio-item-selected genre-btn"
            : "radio-item genre-btn"
        }
        id={genre}
        key={genre}
      >
        {genre.charAt(0).toUpperCase() + genre.slice(1)}
      </Box>
    );
  };

  const ratingItem = (rating) => {
    return (
      <Box
        className={
          currentRating === rating
            ? "radio-item-selected content-rating-btn"
            : "radio-item content-rating-btn"
        }
        id={rating}
        key={rating}
      >
        {rating.charAt(0).toUpperCase() + rating.slice(1)}
      </Box>
    );
  };

  const SortBySelect = ({ sortBy, handleSortByChange, sortByValues }) => (
    <FormControl id="sort-by-button" size="small">
      <Button id={sortBy} style={{padding: "0px"}}>
        <Select
          className="sort-select"
          value={sortBy}
          onChange={handleSortByChange}
          fullWidth
        >
          {sortByValues.map((S) => (
            <MenuItem id={S.id} key={S.id} value={S.value}>
              {S.label}
            </MenuItem>
          ))}
        </Select>
      </Button>
    </FormControl>
  );

  return (
    <Box
      sx={{
        bgcolor: "primary.main",
      }}
      className="genre-panel"
    >
      <Box
        className="radio-container"
        onClick={(e) => {
          console.log(currentGenres)
          const genre = e.target.id;
          if (currentGenres.includes(genre)) {
            setCurrentGenres(
              currentGenres.filter((currGenre) => currGenre !== genre)
            );
          } else {
            genre &&
              setCurrentGenres((currentGenres) => [...currentGenres, genre]);
          }
        }}
      >
        {genres.map(genreItem)}
      </Box>

      <SortBySelect
        sortBy={sortBy}
        handleSortByChange={handleSortByChange}
        sortByValues={sortByValues}
      />

      <Box
        className="radio-container"
        onClick={(e) => {
          const rating = e.target.id;
          rating && setCurrentRating(rating);
        }}
      >
        {ratings.map(ratingItem)}
      </Box>
    </Box>
  );
}

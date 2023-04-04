import './GenrePanel.css';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import React, { useEffect, useState } from "react";

export default function GenrePanel({genres,
    ratings,
    currentGenres,
    setCurrentGenres, 
    currentRating, 
    setCurrentRating, 
    sortByUploadDate, 
    setSortByUploadDate}) {


    const genreItem = (genre) => {

        return (
            <Box
            
            className={(currentGenres.includes(genre)) ? "radio-item-selected" : "radio-item"}
            id={`genre-${genre}`}
            key={genre}
            >
            {genre.charAt(0).toUpperCase() + genre.slice(1)}
            </Box>
            );
    }

    const ratingItem = (rating) => {

        return (
            <Box
            className={(currentRating === rating) ? "radio-item-selected" : "radio-item"}
            id={`rating-${rating}`}
            key={rating}
            >

            {rating.charAt(0).toUpperCase() + rating.slice(1)}
            </Box>
        );
    }

    return (
        <Box 
        sx={{
            bgcolor: 'primary.main', 
        }}
        className="genre-panel"
        >
            <Box 
            className="radio-container"
            onClick={(e) => {
                const genre = e.target.id.split('-')[1];
                if (currentGenres.includes(genre)) {
                    setCurrentGenres(currentGenres.filter(currGenre => currGenre !== genre));
                } else {
                    genre && setCurrentGenres(currentGenres => [ ...currentGenres, genre ]);
                }
            }}
            >
                {genres.map(genreItem)}
            </Box>

            <Button
            id="sort-by-button"
            onClick={() => {
                setSortByUploadDate(!sortByUploadDate);
            }}
            >
                Sort By:{(sortByUploadDate) ? 'Upload Date' : 'Alphabetical Order'}
            </Button>
        
            <Box className="radio-container"
            onClick={(e) => {
                const rating = e.target.id.split('-')[1];
                rating && setCurrentRating(rating);
            }}
            >
                {ratings.map(ratingItem)}
            </Box>

        </Box>
    );
};

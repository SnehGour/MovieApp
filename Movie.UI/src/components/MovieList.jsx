import React from 'react';
import MovieCard from './MovieCard';
import { Paper } from '@mui/material';


const MovieList = ({ movies }) => {
  console.log('allmoveies', movies);
  return (
    <Paper
      elevation={3}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh', // Take the entire screen height
        backgroundColor: 'rgba(0, 0, 0, 0.8)', // 50% transparent black
      }}
    >
      <div className="movie-list">
        {movies.map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))}
      </div>
    </Paper>
  );
};

export default MovieList;
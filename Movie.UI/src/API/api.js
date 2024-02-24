// api.js

import axios from 'axios';

const BASE_URL = 'http://localhost:5120';

const api = axios.create({
  baseURL: BASE_URL,
});

// Function to authenticate user
export const login = (email, password) => {
    return api.post('/api/Account/login', { email, password },{
      headers:{
        'Content-Type':'application/json'
      }
    });
  };
  

// Function to fetch all movies
export const getMovies = () => {
  return api.get('/api/movie/all-movies',{
    headers:{
        'Accept': 'application/json'
    }
  });
};

// Function to fetch a single movie by ID
export const getMovieById = (id) => {
  return api.get(`/movies/${id}`);
};

// Function to search for movies by a query string
export const searchMovies = (query) => {
  return api.get(`/movies/search?query=${query}`);
};

// Function to fetch all genres
export const getGenres = () => {
  return api.get('/genres');
};

// Function to fetch movies by a specific genre
export const getMoviesByGenre = (genreId) => {
  return api.get(`/genres/${genreId}/movies`);
};

// Add more API functions as needed

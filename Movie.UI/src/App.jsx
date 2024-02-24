import logo from './logo.svg';
import './App.css';
import { getMovies} from './API/api'; // Import the API functions
import MovieList from './components/MovieList';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MovieDetailPage from './components/MovieDetailPage';
import HomePage from './Pages/Home/Homepage';
import LoginPage from './Pages/Login/LoginPage';

function App() {


  return (
      <Routes>
        <Route path="/" element={<HomePage></HomePage>} />
        <Route path="/movie" element={<MovieDetailPage  />} />
        <Route path="/login" element={<LoginPage  />} />
      </Routes>
  );
}

export default App;

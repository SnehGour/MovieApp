import logo from './logo.svg';
import './App.css';
import { getMovies} from './API/api'; // Import the API functions
import MovieList from './components/MovieList';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MovieDetailPage from './Pages/Movie/MovieDetailPage';
import HomePage from './Pages/Home/Homepage';
import LoginPage from './Pages/Login/LoginPage';
import RegisterPage from './Pages/Register/RegisterPage';
import CartPage from './Pages/Cart/cart';
import MyOrders from './Pages/MyOrders/myOrders';

function App() {


  return (
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/movie/:movieId" element={<MovieDetailPage/>} />
        <Route path="/login" element={<LoginPage  />} />
        <Route path="/register" element={<RegisterPage  />} />
        <Route path="/cart" element={<CartPage  />} />
        <Route path="/my-orders" element={<MyOrders  />} />
      </Routes>
  );
}

export default App;

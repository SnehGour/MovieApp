// Navbar.js
import React, { useContext, useEffect, useState } from 'react';
import { AppBar, Badge, Button, IconButton, Toolbar, Tooltip, Typography } from '@mui/material';
import { Link, Navigate } from 'react-router-dom';
import { doLogin, doLogout, isLoggedIn } from '../Auth/index'
// Icons
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import TimelineIcon from '@mui/icons-material/Timeline';
import LogoutIcon from '@mui/icons-material/Logout';
import { AuthContext } from '../context/authContext';
import { CartContext } from '../context/cartContext';



const Navbar = () => {
  const { isLogin, setIsLogin } = useContext(AuthContext);
  const { cart, setCart } = useContext(CartContext);
  const [cartItem,setCartItem] =useState(0)
  const handleLogout = () =>  {
    setIsLogin(false);
    localStorage.clear();
  }

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} >
          <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>MovieRent</Link>
        </Typography>
        <Tooltip title="My Orders">
          <IconButton color="inherit" component={Link} to="/my-orders" sx={{ marginLeft: 2 }}>
              <Link to="/my-orders" style={{ color: 'white', textDecoration: 'none' }}><TimelineIcon /></Link>
          </IconButton>
        </Tooltip>
        <Tooltip title="cart">
          <IconButton color="inherit" component={Link} to="/cart" sx={{ marginLeft: 2 }}>
            <Badge badgeContent={ cart.length } color='error'>
              <Link to="/cart" style={{ color: 'white', textDecoration: 'none' }}><ShoppingCartIcon /></Link>
            </Badge>
          </IconButton>
        </Tooltip>
        {isLogin ? (
          <Tooltip title="Logout">
            <IconButton color="inherit" onClick={handleLogout} sx={{ marginLeft: 2 }}>
              <LogoutIcon />
            </IconButton>
          </Tooltip>

        ) : (
          <Typography variant="body1" component="div">
            <Link to="/login" style={{ color: 'white', textDecoration: 'none' }}>Login</Link>
          </Typography>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;

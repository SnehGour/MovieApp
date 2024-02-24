// Navbar.js
import React, { useContext, useEffect, useState } from 'react';
import { AppBar, Button, IconButton, Toolbar, Tooltip, Typography } from '@mui/material';
import { Link, Navigate } from 'react-router-dom';
import {doLogin,doLogout,isLoggedIn} from '../Auth/index'
// Icons
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LogoutIcon from '@mui/icons-material/Logout';
import { AuthContext } from '../context/authContext';



const Navbar = () => {
  const {isLogin,setIsLogin} = useContext(AuthContext)

  const handleLogout = () => {
    setIsLogin(false);
    localStorage.clear();
  }


  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          MovieRent
        </Typography>
        <Tooltip title="cart">
          <IconButton color="inherit" component={Link} to="/cart" sx={{ marginLeft: 2 }}>
            <ShoppingCartIcon />
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

// Navbar.js
import React, { useEffect, useState } from 'react';
import { AppBar, Button, IconButton, Toolbar, Tooltip, Typography } from '@mui/material';
import { Link, Navigate } from 'react-router-dom';

// Icons
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LogoutIcon from '@mui/icons-material/Logout';



const handleLogout = () => {
  alert('logout')
}

const Navbar = ({isLoggedIn}) => {

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
        {isLoggedIn ? (
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
        {/* Add login and register buttons */}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;

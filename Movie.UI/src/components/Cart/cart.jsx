import React from 'react';
import { Paper, Typography, Button, Grid, Link } from '@mui/material';
import CartItem from './cartItem'; // Import the CartItem component
import DeleteIcon from '@mui/icons-material/Delete';
import Navbar from '../Navbar';

const CartPage = () => {
    // Dummy movie data
    const cartItems = [
        { id: 1, title: 'Movie 1', year: '2022', price: '50$', image: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg' },
        { id: 2, title: 'Movie 2', year: '2021', price: '40$', image: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg' },
        // Add more movie items as needed
    ];

    return (
        <div className='cart'>
            <Navbar/>
            <Paper elevation={3} style={{ padding: '20px', maxWidth: '700px', margin: 'auto', marginTop: '100px' }}>
                <Typography variant="h5" align="center">Your Cart</Typography>
                <Grid container spacing={2}>
                    {cartItems.map((movie) => (
                        <Grid item xs={12} key={movie.id}>
                            <CartItem movie={movie} />
                        </Grid>
                    ))}
                    <Grid item xs={12}>
                        <Button
                            variant="contained"
                            color="primary"
                            fullWidth
                            style={{ marginTop: '20px' }}
                        >
                            Proceed to Checkout
                        </Button>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
};

export default CartPage;

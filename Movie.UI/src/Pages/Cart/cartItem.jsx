import React, { useContext } from 'react';
import { Card, CardMedia, CardContent, Typography, Button, Box, Tooltip } from '@mui/material';
import Delete from '@mui/icons-material/Delete';
import { CartContext } from '../../context/cartContext';

const CartItem = ({ movie }) => {
    const { cart, setCart } = useContext(CartContext);

    const handleRemoveCart = (movieId) => {
        var movies = cart;
        var updatedMovies = movies.filter((movie)=>movie.id != movieId)
        setCart(updatedMovies)
    }

    return (
        <Card sx={{ display: 'flex' }}>
            <CardMedia
                component="img"
                sx={{ width: 100, height: 100, objectFit: 'contain' }}
                image={movie.poster} // Provide the URL of the movie image
                alt={movie.title}
            />
            <CardContent sx={{ flex: 1 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="h6">{movie.title}</Typography>
                    <Tooltip title="remove from cart">
                        <Button color="error" onClick={() => handleRemoveCart(movie.id)}>{<Delete />}</Button>
                    </Tooltip>
                </Box>
                <Typography variant="subtitle1" sx={{ marginBottom: '8px' }}>{movie.year}</Typography>
                <Typography variant="body2" sx={{ marginBottom: '8px' }}>{movie.price}₹</Typography>
            </CardContent>
        </Card>
    );
};

export default CartItem;

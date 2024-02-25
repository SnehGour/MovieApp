import React from 'react';
import { Card, CardMedia, CardContent, Typography, Button, Box, Tooltip } from '@mui/material';
import Delete from '@mui/icons-material/Delete';

const CartItem = ({ movie }) => {
    return (
        <Card sx={{ display: 'flex' }}>
            <CardMedia
                component="img"
                sx={{ width: 100, height: 100, objectFit: 'contain' }}
                image={movie.image} // Provide the URL of the movie image
                alt={movie.title}
            />
            <CardContent sx={{ flex: 1 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="h6">{movie.title}</Typography>
                    <Tooltip title="remove from cart">
                        <Button color="error">{<Delete />}</Button>
                    </Tooltip>
                </Box>
                <Typography variant="subtitle1" sx={{ marginBottom: '8px' }}>{movie.year}</Typography>
                <Typography variant="body2" sx={{ marginBottom: '8px' }}>{movie.price}</Typography>
            </CardContent>
        </Card>
    );
};

export default CartItem;

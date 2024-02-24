import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import  {ButtonBase}  from '@mui/material';
import { useNavigate } from 'react-router-dom';

const MovieCard = ({ movie }) => {
    console.log(movie);
    const navigate = useNavigate()

    const handleClick = () => {
        // Add logic for handling the click event
        console.log('Card clicked:', movie.id);
        navigate(`/movie/${movie.id}`);
    };
    return (
        <ButtonBase onClick={handleClick}>
            <Card sx={{ display: 'inline-block', maxWidth: 345, margin: 2 }}>
                <CardMedia
                    component="img"
                    image={movie.poster}
                    alt={movie.title}
                    sx={{ height: 200, objectFit: 'contain' }}
                />
            </Card>
        </ButtonBase>
    );
}
export default MovieCard;
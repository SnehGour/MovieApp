import { useParams } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import { Button, Card, CardContent, CardHeader, CardMedia, Grid, Typography, colors } from '@mui/material';
import ReactPlayer from 'react-player'
import { youtubeUrlEnabler } from '../../Utility/youtube'
import MovieIcon from '@mui/icons-material/Movie';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { getMovieById } from '../../API/api'
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/authContext';
import { getToken } from '../../Auth';

const MovieDetailPage = () => {
    const { movieId } = useParams();
    const { isLogin, setIsLogin } = useContext(AuthContext)
    const [movie, setMovie] = useState(null);
    useEffect(() => {
        if (isLogin) {
            var token = getToken();
            getMovieById(movieId,token).then(response => {
                console.log('response-by-movie-id', response);
                setMovie(response.data.result);
            })
        }
    }, [])
    return (
        <div className='movie-detail'>
            <Navbar />
            {/* Embed the YouTube video */}
            <CardMedia component="iframe"
                src="https://www.youtube.com/embed/BmllggGO4pM?"
                sx={{
                    width: "100%",
                    height: "300px"
                }}
            />

            {movie && (<Grid container spacing={2}>
                <Grid item xs={3}>
                    <Card>
                        <CardMedia component="img" src={movie.poster} />
                    </Card>
                </Grid>
                <Grid item xs={9}>
                    <Card sx={{ bgcolor: 'black', color: 'white', height: '100%' }}>
                        <CardContent>
                            <Typography variant="h4" gutterBottom sx={{ marginBottom: '16px' }}>
                                {movie.title} ({movie.year})
                            </Typography>
                            <Typography variant="h3" gutterBottom sx={{ marginBottom: '8px' }}>
                                WATCH NOW
                            </Typography>
                            <Typography variant="body1" gutterBottom sx={{ marginBottom: '24px', fontSize: '1.2rem' }}>
                                Price: {movie.price}₹
                            </Typography>
                            <Typography variant="body1" gutterBottom sx={{ marginBottom: '24px', fontSize: '1.2rem' }}>
                                Plot: {movie.plot}
                            </Typography>
                            <Typography variant="body1" gutterBottom sx={{ marginBottom: '24px', fontSize: '1.2rem' }}>
                                Director: {movie.director}
                            </Typography>
                            <Button variant="contained" color="warning" fullWidth sx={{
                                marginTop: '16px',
                                borderRadius: '20px',
                                backgroundColor: '#FF4500', // Orange color
                                '&:hover': {
                                    backgroundColor: '#333', // Lighter shade of orange on hover
                                },
                            }}
                                startIcon={<AddShoppingCartIcon />}>
                                Add to Cart
                            </Button>
                            <Button variant="contained" color="primary" fullWidth sx={{
                                marginTop: '16px',
                                borderRadius: '20px',
                                backgroundColor: '#3266a8', // Orange color
                                '&:hover': {
                                    backgroundColor: '#333', // Lighter shade of orange on hover
                                },
                            }}
                                startIcon={<MovieIcon />}>
                                Rent Now
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>)}

        </div>);
}

export default MovieDetailPage;
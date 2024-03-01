import { useNavigate, useParams } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import { Button, Card, CardContent, CardHeader, CardMedia, Grid, Typography, colors } from '@mui/material';
import ReactPlayer from 'react-player'
import { youtubeUrlEnabler } from '../../Utility/youtube'
import MovieIcon from '@mui/icons-material/Movie';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import { getMovieById } from '../../API/api'
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/authContext';
import { getToken } from '../../Auth';
import { CartContext } from '../../context/cartContext';
import { RemoveFromCart, addInCart, isMovieAlreadyInCart, removeFromCart } from '../../Utility/movies'

const MovieDetailPage = () => {

    const { movieId } = useParams();
    const { isLogin, setIsLogin } = useContext(AuthContext)
    const { cart, setCart } = useContext(CartContext)
    const [movie, setMovie] = useState(null);
    const [cartButton, setCartButton] = useState(true);
    const navigate = useNavigate();

    const handleAddToCart = (event) => {
        console.log('Add To cart Button', cart)
        var currentMovies = cart?.movies;
        var isAddedInCart = isMovieAlreadyInCart(cart, movieId);
        if (!isAddedInCart) {
            console.log('Before Adding')
            setCart([...cart, movie]);
            setCartButton(false)
            console.log('movie about to add ', movie)
            console.log('movie added ', cart)
        }
    }
    const handleRentNow = () => {
        navigate("/cart");
    }
    const handleRemoveFromCart = () => {
        var movies = cart;
        var isAddedInCart = isMovieAlreadyInCart(cart, movieId);
        console.log('rcb-> isAddedInCart', isAddedInCart, movieId)
        if (isAddedInCart) {
            console.log('before remvoing', cart)
            const indexToRemove = movies.findIndex((movie) => movie.id == movieId);

            if (indexToRemove !== -1) {
                movies.splice(indexToRemove, 1);
            }
            // Update the cart state with the filtered movies
            setCart(movies);
            setCartButton(true);
        }
    }

    useEffect(() => {

        if (isLogin) {
            var token = getToken();
            getMovieById(movieId, token).then(response => {
                console.log('response-by-movie-id', response);
                setMovie(response.data.result);
            })


            // cart button
            console.log('useEffect cart', cart)
            var isAddedInCart = isMovieAlreadyInCart(cart, movieId);
            console.log('useEffect cart _> isAddedIncart', isAddedInCart)
            if (isAddedInCart) {
                setCartButton(false);
            }
        }
    }, [cartButton])
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
                            {cartButton ? (<Button onClick={handleAddToCart} variant="contained" color="warning" fullWidth sx={{
                                marginTop: '16px',
                                borderRadius: '20px',
                                backgroundColor: '#FF4500', // Orange color
                                '&:hover': {
                                    backgroundColor: '#333', // Lighter shade of orange on hover
                                },
                            }}
                                startIcon={<AddShoppingCartIcon />}>
                                Add to Cart
                            </Button>) : (<Button onClick={handleRemoveFromCart} variant="contained" color="warning" fullWidth sx={{
                                marginTop: '16px',
                                borderRadius: '20px',
                                backgroundColor: '#FF4500', // Orange color
                                '&:hover': {
                                    backgroundColor: '#333', // Lighter shade of orange on hover
                                },
                            }}
                                startIcon={<RemoveShoppingCartIcon />}>
                                Remove from Cart
                            </Button>)}
                            <Button variant="contained" color="primary" fullWidth sx={{
                                marginTop: '16px',
                                borderRadius: '20px',
                                backgroundColor: '#3266a8', // Orange color
                                '&:hover': {
                                    backgroundColor: '#333', // Lighter shade of orange on hover
                                },
                            }}
                                startIcon={<MovieIcon />}
                                onClick={() => handleRentNow()}>
                                Rent Now
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>)}

        </div>);
}

export default MovieDetailPage;
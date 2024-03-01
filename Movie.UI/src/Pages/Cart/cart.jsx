import React, { useContext, useEffect } from 'react';
import { Paper, Typography, Button, Grid, Link } from '@mui/material';
import CartItem from './cartItem'; // Import the CartItem component
import DeleteIcon from '@mui/icons-material/Delete';
import Navbar from '../../components/Navbar';
import { totalInCart } from '../../Utility/movies';
import { CartContext } from '../../context/cartContext';
import { confirmPayment, makepayment } from '../../API/api';
import { AuthContext } from '../../context/authContext';
import { useNavigate } from 'react-router-dom';

const CartPage = () => {
    const { cart, setCart } = useContext(CartContext);
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();



    const handleBackToHome = () =>{
        navigate("/");
    }

    <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
    const handleRazorpayPayment = async () => {
        console.log('payment start')
        const data = {
            Name: user.username,
            Email: user.email,
            Amount: totalInCart(cart)
        }; // here anything extra can be passed while creating an order
        const response = await makepayment(data)
        console.log('payment-response0', response)
        const order_id = response?.data.id;
        const options = {
            key: `rzp_test_IQZXau0IIU42lO`,
            amount: totalInCart(cart) * 100,
            name: 'Movie Rent',
            order_id: order_id,
            handler: (opt) => {
                console.log('payment', opt, response)
                confirmPayment(opt.razorpay_payment_id, response?.data.orderId,user.email)
                    .then(res => {
                        console.log('Before redirect',res);
                        navigate(`/my-orders`);
                    })
                    .catch((err) => console.log(err))
            },
            prefill: {
                name: user.username,
                email: user.email
            },
            theme: {
                color: '#2596be'
            }
        };
        const rzp1 = window.Razorpay(options);
        rzp1.open();
    };

    useEffect(() => {
        // Load Razorpay checkout script
        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            // Cleanup: remove the script when the component unmounts
            document.body.removeChild(script);
        };
    }, [])
    return (
        <div className='cart'>
            <Navbar />
            {cart.length > 0 ? (<Paper elevation={3} sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <Typography variant="h5" align="center">Your Cart</Typography>
                <Grid container spacing={2}>
                    {cart.map((movie, index) => (
                        <Grid item xs={12} key={index}>
                            <CartItem movie={movie} />
                        </Grid>
                    ))}

                </Grid>
            </Paper>) : (<h1>No Movies in the Cart</h1>)}
            <Typography variant="h5" align="center" margin={2}>Total: {totalInCart(cart)}₹</Typography>

            {cart.length <= 0 ? (
                <Grid item xs={12}>
                    <Button
                        variant="contained"
                        color="inherit"
                        fullWidth
                        style={{ marginTop: '20px' }}
                        onClick={() => handleBackToHome()}
                    >
                        Back to Home
                    </Button>
                </Grid>
            ) : (<Grid item xs={12}>
                <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    style={{ marginTop: '20px' }}
                    onClick={() => handleRazorpayPayment()}
                >
                    Proceed to Checkout
                </Button>
            </Grid>)}

        </div>
    );
};

export default CartPage;

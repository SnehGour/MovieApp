import React, { useState } from 'react';
import { Paper, Typography, TextField, Button, Grid, Link } from '@mui/material';
import { register } from '../../API/api';
import { Navigate, useNavigate } from 'react-router-dom';

const RegisterPage = () => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleUsernameChange = (event)=>{
        setUsername(event.target.value);
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        // Add register logic here

        register(username,email, password).then(response => {
            console.log('response', response)
            navigate(`/login`);
        });
    };

    return (
        <Paper elevation={3} style={{ padding: '20px', maxWidth: '400px', margin: 'auto', marginTop: '100px' }}>
            <Typography variant="h5" align="center">Register</Typography>
            <form style={{ width: '100%', marginTop: '20px' }} onSubmit={handleSubmit}>

                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Username"
                            variant="outlined"
                            value={username}
                            onChange={handleUsernameChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Email"
                            variant="outlined"
                            value={email}
                            onChange={handleEmailChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            type="password"
                            label="Password"
                            variant="outlined"
                            value={password}
                            onChange={handlePasswordChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            fullWidth
                            style={{ marginTop: '20px' }}
                        >
                            Register
                        </Button>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="body1" align="center">
                            Already have an account? <Link to="/login">Login</Link>
                        </Typography>
                    </Grid>
                </Grid>
            </form>
        </Paper>
    );
};

export default RegisterPage;

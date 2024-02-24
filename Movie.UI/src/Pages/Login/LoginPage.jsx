import React, { useEffect, useState } from 'react';
import { Paper, Typography, TextField, Button, Grid } from '@mui/material';
import { login } from '../../API/api';
import { Navigate, Redirect } from 'react-router-dom';

const LoginPage = () => {

  const [isLoggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(()=>{

  },[isLoggedIn])


  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Add login logic here

    login(email, password).then(response=>{
      console.log('response',response)
      if(response.data.isSuccess){
        setLoggedIn(true);
        const token = response.data.result.token;
        localStorage.setItem('token', token);
      }
    });
  
    

  };

  if (isLoggedIn) {
    return <Navigate to="/" />;
  }

  return (
    <Paper elevation={3} style={{ padding: '20px', maxWidth: '400px', margin: 'auto', marginTop: '100px' }}>
      <Typography variant="h5" align="center">Login</Typography>
      <form style={{ width: '100%', marginTop: '20px' }} onSubmit={handleSubmit}>
        <Grid container spacing={2}>
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
              Login
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};

export default LoginPage;

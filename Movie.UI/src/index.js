import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Router } from 'react-router-dom'
import { MovieProvider } from './context/movieContext'
import { AuthProvider } from './context/authContext'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <AuthProvider>
            <MovieProvider>
                <App />
            </MovieProvider>
        </AuthProvider>
    </BrowserRouter>
);


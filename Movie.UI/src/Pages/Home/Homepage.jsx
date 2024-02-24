import { useState } from "react";
import MovieList from "../../components/MovieList";
import Navbar from "../../components/Navbar";
import { getMovies } from "../../API/api";
import { Navigate } from "react-router-dom";


const HomePage = () => {
    const [movieList,setMovieList] = useState([]);
    const [isLoggedIn,setIsLoggedIn] = useState(false);


    useState(()=>{
          //1. Check is UserLoggedIn
          var token = localStorage.getItem('token');
          if(token !==null){
            setIsLoggedIn(true);
          }

          // Fetch movies when the component mounts
          getMovies()
          .then(response => {
            setMovieList(response.data);
          })
          .catch(error => {
            console.error('Error fetching movies:', error);
          });
    },[])

    if(!isLoggedIn){
      return <Navigate to="/login"/>
    }
    return (
        <>
            <Navbar isLoggedIn={isLoggedIn}/>
            <MovieList movies={movieList}/> 
        </>);

}

export default HomePage
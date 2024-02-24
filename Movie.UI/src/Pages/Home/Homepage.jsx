import { useContext, useState } from "react";
import MovieList from "../../components/MovieList";
import Navbar from "../../components/Navbar";
import { getMovies } from "../../API/api";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import { getToken } from "../../Auth";


const HomePage = () => {
    const [movieList,setMovieList] = useState([]);
    const {isLogin,setIsLogin} = useContext(AuthContext)

    useState(()=>{
          // Fetch movies when the component mounts
          console.log('HomePage',isLogin)
          if(isLogin){
            var token = getToken();
            getMovies(token)
          .then(response => {
            setMovieList(response.data);
          })
          .catch(error => {
            console.error('Error fetching movies:', error);
          });
          }
    },[isLogin])

    if(!isLogin){
      return <Navigate to="/login"/>
    }
    return (
        <>
            <Navbar isLogin={isLogin}/>
            <MovieList movies={movieList}/> 
        </>);

}

export default HomePage
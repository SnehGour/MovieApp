import { useParams } from 'react-router-dom';


const MovieDetailPage = () => {
    const { movieId } = useParams();

    return (<h1>{movieId}:Movie Deatil Page</h1>);
}

export default MovieDetailPage;
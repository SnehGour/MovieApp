import { createContext } from 'react'
import MovieReducer from './MovieReducer'

const initialState = {
    movies: []
}
const MovieContext = createContext(initialState)

const MovieProvider = ({ children }) => {

    const [state,dispatch] = useReducer(MovieReducer,initialState)

    return (
        <MovieContext.Provider values={{
            movies:state.movies
        }}>
            {children}
        </MovieContext.Provider>
    )
}
export {MovieProvider,MovieContext}
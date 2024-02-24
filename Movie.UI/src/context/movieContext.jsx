import { createContext,useState } from "react"


// store the state
export const MovieContext = createContext(null);


// provider for providing the values to the other components
export const MovieProvider = (props) => {
    const [movies,setMovies] = useState(null)
    return (
        <MovieContext.Provider value={{movies,setMovies}}>
            {props.children}
        </MovieContext.Provider>
    )
}

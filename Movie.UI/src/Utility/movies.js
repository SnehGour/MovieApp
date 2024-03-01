export const isMovieAlreadyInCart = (currentMovies, movieId) => {

    console.log('11111111',currentMovies,movieId)
    
    // Iterate through the movies array
    for (let i = 0; i < currentMovies?.length; i++) {
        // Check if the current movie's id matches the given movieId
        if (currentMovies[i].id == movieId) {
            // If found, return true
            console.log('before true')
            return true;
        }
    }
    // If not found, return false
    return false;
}

export const addInCart = (currentMovies, movie) => {
    currentMovies?.push(movie);
    return currentMovies;
}


export const removeFromCart = (currentMovies, movieId) => {
    const updatedMovies = currentMovies?.filter((movie) => movie.id != movieId);
    console.log('uyiliyu:After',updatedMovies,movieId);
    return updatedMovies;
}

export const totalInCart = (movies) => {
    var total = 0;
    for (let i = 0; i < movies?.length; i++) {
        total += movies[i].price;
    }

    return total;
}



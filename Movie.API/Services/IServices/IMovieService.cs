namespace Movie.API.Services.IServices
{
    public interface IMovieService
    {
        Task<IEnumerable<Movie.API.Models.Movie>> GetAllMoviesAsync();
        Task<Movie.API.Models.Movie>GetMovieByIdAsync(int id);

    }
}

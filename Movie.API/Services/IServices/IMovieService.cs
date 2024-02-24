namespace Movie.API.Services.IServices
{
    public interface IMovieService
    {
        Task<IEnumerable<Movie.API.Models.Movie>> GetAllMoviesAsync();
    }
}

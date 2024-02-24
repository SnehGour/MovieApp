using Microsoft.EntityFrameworkCore;
using Movie.API.Data;
using Movie.API.Services.IServices;

namespace Movie.API.Services
{
    public class MovieService : IMovieService
    {
        private readonly ApplicationDbContext _context;
        public MovieService(ApplicationDbContext context)
        {
            _context = context;
        }
        public async Task<IEnumerable<Models.Movie>> GetAllMoviesAsync()
        {
            return await _context.Movies.ToListAsync();
        }
    }
}

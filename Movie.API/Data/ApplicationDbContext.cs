using Microsoft.EntityFrameworkCore;
using Movie.API.Models;

namespace Movie.API.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options) { }

        public DbSet<Movie.API.Models.Movie> Movies { get; set; }
        public DbSet<Movie.API.Models.AppUser> AppUsers { get; set; }
    }
}

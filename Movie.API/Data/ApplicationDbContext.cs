using Microsoft.EntityFrameworkCore;
using Movie.API.Models;

namespace Movie.API.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options) { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Movie.API.Models.Movie>()
                .HasData(
                new Movie.API.Models.Movie()
                {
                    Id = 1,
                    Title = "The Dark Knight",
                    Poster = @"https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
                    Director = "Christopher Nolan",
                    Plot = "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
                    Price = 100,
                    Year = 2008
                }
                );
        }
        public DbSet<Movie.API.Models.MyOrders> MyrOrders { get; set; }
        public DbSet<Movie.API.Models.Movie> Movies { get; set; }
        public DbSet<Movie.API.Models.AppUser> AppUsers { get; set; }
    }
}

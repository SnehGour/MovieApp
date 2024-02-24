namespace Movie.API.Models.Dtos
{
    public class MovieDto
    {
        public int Id { get; set; }
        public string Title { get; set; } = null!;
        public string? Plot { get; set; }
        public float Price { get; set; }
        public string? Poster { get; set; }
        public int Year { get; set; }
        public string? Director { get; set; }
    }
}

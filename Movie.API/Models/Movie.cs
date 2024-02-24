using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace Movie.API.Models
{
    public class Movie
    {
        [Key]
        public int Id { get; set; }
        public string Title { get; set; } = null!;
        public string? Plot { get; set; }
        public float Price { get; set; }
        public string? Poster { get; set; }
        public int Year { get; set; }
        public string? Director { get; set; }

    }
    public class Actor
    {
        [Key]
        public int ActorId { get; set; }
        public string? Name { get; set; }
        [JsonIgnore]
        public int MovieId { get; set; }
    }
}

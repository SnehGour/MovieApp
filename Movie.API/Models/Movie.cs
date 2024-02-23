using System.ComponentModel.DataAnnotations;

namespace Movie.API.Models
{
    public class Movie
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; } = null!;
        public string? Description { get; set; }
        public uint UpVote { get; set; } 
        public float Price { get; set; }

    }
}

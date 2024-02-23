using System.ComponentModel.DataAnnotations;

namespace Movie.API.Models
{
    public class Register
    {
        [Required(ErrorMessage ="Username is required")]
        [RegularExpression("^[a-z0-9A-z]{1,12}$")]
        public string Username { get; set; }

        [Required(ErrorMessage = "Password is required")]
        [DataType(DataType.Password)]
        public string Password { get; set; }

        [Required]
        [EmailAddress(ErrorMessage ="Email is Required")]
        public string Email { get; set; }
    }
}

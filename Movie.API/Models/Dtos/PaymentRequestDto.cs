using System.ComponentModel.DataAnnotations;

namespace Movie.API.Models.Dtos
{
    public class PaymentRequestDto
    {
        public string Name { get; set; }
        public string Email { get; set; }
        public int Amount { get; set; }
    }
}

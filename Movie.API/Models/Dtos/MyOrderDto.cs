using System.ComponentModel.DataAnnotations;

namespace Movie.API.Models.Dtos
{
    public class MyOrderDto
    {
        public string RazorpayOrderId { get; set; }
        public string PaymentId { get; set; }
        public string Email { get; set; }
        public DateTime CreatedAt { get; set; }

    }
}

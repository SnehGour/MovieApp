using System.ComponentModel.DataAnnotations;

namespace Movie.API.Models.Dtos
{
    public class MyOrderDto
    {
        public string RazorpayOrderId { get; set; }
        public string PaymentId { get; set; }
        public int AppUserId { get; set; }

    }
}

using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace Movie.API.Models
{
    public class MyOrders
    {
        [Key]
        public int OrderId { get; set; }
        public string RazorpayOrderId { get; set; }
        public string PaymentId { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.Now;

        [Required]
        public string Email { get; set; }


    }
}

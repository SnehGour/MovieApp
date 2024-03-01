namespace Movie.API.Models.Dtos
{
    public class ConfirmPaymentDto
    {
        public string PaymentId { get; set; }
        public string OrderId { get; set; }
        public string Email { get; set; }
    }
}

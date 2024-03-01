using Movie.API.Models;
using Movie.API.Models.Dtos;
using Razorpay.Api;

namespace Movie.API.Services.IServices
{
    public interface IPaymentGateway
    {
        public Task<MerchantOrder> RazorPay(PaymentRequestDto paymentRequestDto);
        string CompleteOrderProcess(ConfirmPaymentDto confirmPaymentDto);

    }
}

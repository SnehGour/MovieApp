using Microsoft.AspNetCore.Mvc;
using Movie.API.Models;
using Movie.API.Models.Dtos;
using Movie.API.Services.IServices;
using Razorpay.Api;

namespace Movie.API.Services
{
    public class PaymentGateway : IPaymentGateway
    {
        private readonly RazorpayClient _razorpayClient;
        private readonly IConfiguration _configuration;
        public PaymentGateway(IConfiguration configuration, RazorpayClient razorpayClient)
        {
            _razorpayClient = razorpayClient;
            _configuration = configuration; 
        }

        public string CompleteOrderProcess(ConfirmPaymentDto confirmPaymentDto)
        {
            try
            {
                string paymentId = confirmPaymentDto.PaymentId;
                // This is orderId
                string orderId = confirmPaymentDto.OrderId;
                RazorpayClient client = new RazorpayClient(_configuration["Razorpay:Key"], _configuration["Razorpay:Secret"]);
                Payment payment = client.Payment.Fetch(paymentId);
                // This code is for capture the payment 
                Dictionary<string, object> options = new();
                options.Add("amount",Convert.ToInt64(payment.Attributes["amount"]));
                Payment paymentCaptured = payment.Capture(options);
                string amt = paymentCaptured.Attributes["amount"];
                string status = paymentCaptured.Attributes["status"];
                return status;
            }
            catch (Exception)
            {
                throw;
            }  
        }

        public Task<MerchantOrder> RazorPay(PaymentRequestDto paymentRequestDto)
        {
            try
            {
                // Generate random receipt number for order
                Random randomObj = new Random();
                string transactionId = randomObj.Next(10000000, 100000000).ToString();
                Razorpay.Api.RazorpayClient client = new Razorpay.Api.RazorpayClient(_configuration["Razorpay:Key"], _configuration["Razorpay:Secret"]);
                Dictionary<string, object> options = new Dictionary<string, object>();
                options.Add("amount", paymentRequestDto.Amount*100);
                options.Add("receipt", transactionId);
                options.Add("currency", "INR");
                options.Add("payment_capture", "0"); // 1 - automatic  , 0 - manual
                //options.Add("Notes", "Test Payment of Merchant");
                Razorpay.Api.Order orderResponse = client.Order.Create(options);
                string orderId = orderResponse["id"].ToString();
                MerchantOrder order = new MerchantOrder
                {
                    OrderId = orderResponse.Attributes["id"],
                    RazorpayKey = _configuration["Razorpay:Key"],
                    Amount = paymentRequestDto.Amount,
                    Currency = "INR",
                    Name = paymentRequestDto.Name,
                    Email = paymentRequestDto.Email,
                    Description = "Order by Merchant"
                };
                return Task.FromResult(order);
            }
            catch (Exception ex)
            {
                throw;
            }
        }
    }
}

using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Movie.API.Models;
using Movie.API.Models.Dtos;
using Movie.API.Services.IServices;
using Newtonsoft.Json;
using Razorpay.Api;
using System.Web;

namespace Movie.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PaymentController : ControllerBase
    {
        private readonly IPaymentGateway _paymentGateway;
        private IHttpContextAccessor _httpContextAccessor;
        private readonly IAccountService _accountService;

        public PaymentController(IPaymentGateway paymentGateway,
            IHttpContextAccessor httpContextAccessor,
            IAccountService accountService)
        {
            _paymentGateway = paymentGateway;
            _httpContextAccessor = httpContextAccessor;
            _accountService = accountService;
        }
        [HttpPost]
        [Route("Process-order")]
        public async Task<IActionResult> ProcessRequestOrder([FromBody]PaymentRequestDto _paymentRequest)
        {
            MerchantOrder _marchantOrder = await _paymentGateway.RazorPay(_paymentRequest);
            return new JsonResult(_marchantOrder);
        }
        [HttpPost]
        [Route("Complete-order")]
        public async Task<IActionResult> CompleteOrderProcess([FromBody]ConfirmPaymentDto confirmPaymentDto)
        {
            string PaymentMessage =  _paymentGateway.CompleteOrderProcess(confirmPaymentDto);
            if (PaymentMessage == "captured" && confirmPaymentDto.Email !=null)
            {

                MyOrderDto myOrderDto = new MyOrderDto()
                {
                    Email = confirmPaymentDto.Email,
                    PaymentId = confirmPaymentDto.PaymentId,
                    RazorpayOrderId = confirmPaymentDto.OrderId,
                };
                var myOrderDtoJson = JsonConvert.SerializeObject(myOrderDto);
                var encodedDto = HttpUtility.UrlEncode(myOrderDtoJson);
                return RedirectToAction("Create", "Order", new { myOrderDto = encodedDto });
            }
            return new JsonResult(PaymentMessage);
        }

    }
}

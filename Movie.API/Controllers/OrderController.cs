using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Movie.API.Models;
using Movie.API.Models.Dtos;
using Movie.API.Services.IServices;
using Newtonsoft.Json;
using System.Web;

namespace Movie.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrderController : ControllerBase
    {
        private readonly IOrderService _orderService;
        private readonly IMapper _mapper;
        public OrderController(IOrderService orderService,
            IMapper mapper)
        {
            _orderService = orderService;
            _mapper = mapper;
        }

        [HttpGet("get")]
        public async Task<IActionResult> Get(string email)
        {
            if(string.IsNullOrEmpty(email))
            {
                return BadRequest();
            }

            IEnumerable<MyOrders> myOrders = await _orderService.GetAsync(email);
            List<MyOrderDto> myOrdersDto = _mapper.Map<List<MyOrderDto>>(myOrders);

            return Ok(myOrdersDto);
        }


        [HttpGet("create")]
        public async Task<IActionResult> Create(string myOrderDto)
        {
            var decodedDto = HttpUtility.UrlDecode(myOrderDto);
            var myOrderDtoObject = JsonConvert.DeserializeObject<MyOrderDto>(decodedDto);
            if (myOrderDtoObject.AppUserId > 0 && myOrderDtoObject.PaymentId != null && myOrderDtoObject.RazorpayOrderId != null)
            {
                MyOrders myOrder = _mapper.Map<MyOrders>(myOrderDtoObject);
                var isCreated = await _orderService.CreateAsync(myOrder);

                return isCreated ? Ok() : BadRequest();
            }
            return BadRequest("Provide all field data");
        }
    }
}

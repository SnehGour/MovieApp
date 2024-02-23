using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity.Data;
using Microsoft.AspNetCore.Mvc;
using Movie.API.Models.Dtos;
using Movie.API.Services.IServices;

namespace Movie.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private readonly IAccountService _accountService;
        private readonly IMapper _mapper;
        private Response response;
        public AccountController(IAccountService accountService,
            IMapper mapper)
        {
            _mapper = mapper;
            _accountService = accountService;
            response = new Response();
        }


        [HttpPost]
        [Route("Register")]
        public async Task<Response> Register([FromBody]RegisterRequestDto registerRequestDto)
        {
            if (!ModelState.IsValid)
            {
                ModelState.AddModelError("invalid", "Please provide correct values");
                response.Message = "Invalid values";
            }

            var isRegistered = await _accountService.RegisterAsync(registerRequestDto);
            if (!isRegistered)
            {
                response.Message = "Invalid Input";
            }
            response.IsSuccess = true;
            response.Message = "Regsitered";
            return response;
        }

        [HttpPost]
        [Route("Login")]
        public async Task<Response> Login([FromBody]LoginRequestDto loginRequest)
        {

            if (ModelState.IsValid)
            {
                var loginRequestDto = _mapper.Map<LoginRequestDto>(loginRequest);
                try
                {
                    var loginResponseDto = await _accountService.LoginAsync(loginRequestDto);
                    if(loginResponseDto.Token != null)
                    {
                        response.IsSuccess = true;
                        response.Result = loginResponseDto;
                        response.Message = "Logged In";
                    }
                }
                catch (Exception ex)
                {
                    response.Message = ex.Message;
                }
                return response;
            }
            response.Message = "Invalid User";
            return response;
        }
    }
}

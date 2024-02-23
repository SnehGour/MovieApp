using Microsoft.AspNetCore.Identity.Data;
using Movie.API.Models.Dtos;

namespace Movie.API.Services.IServices
{
    public interface IAccountService
    {
        Task<LoginResponseDto> LoginAsync(LoginRequestDto loginRequestDto);
        Task<bool> RegisterAsync(RegisterRequestDto registerRequestDto);
    }
}

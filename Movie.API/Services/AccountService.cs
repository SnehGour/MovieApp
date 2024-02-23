using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Movie.API.Data;
using Movie.API.Models;
using Movie.API.Models.Dtos;
using Movie.API.Services.IServices;

namespace Movie.API.Services
{
    public class AccountService : IAccountService
    {
        private readonly ApplicationDbContext _context;

        private readonly IJwtTokenGeneratorService _jwtTokenGeneratorService;
        private readonly IPasswordHasher _passwordHasher;
        public AccountService(ApplicationDbContext context,
            IJwtTokenGeneratorService jwtTokenGeneratorService,
            IPasswordHasher passwordHasher)
        {
            _passwordHasher = passwordHasher;
            _context = context;
            _jwtTokenGeneratorService = jwtTokenGeneratorService;
        }
        public async Task<LoginResponseDto> LoginAsync(LoginRequestDto loginRequestDto)
        {
            // 1. Check user exist or not

            var user = await _context.AppUsers.FirstOrDefaultAsync(user => user.Email == loginRequestDto.Email);
            if (user != null)
            {
                // 2. Check password
                var isPasswordCorrect = _passwordHasher.VerifyPassword(user.Password, loginRequestDto.Password);

                if (isPasswordCorrect)
                {
                    // 3. User exists, now create token
                    var token = _jwtTokenGeneratorService.GenerateJwtToken(user);

                    return new LoginResponseDto
                    {
                        Token = token,
                    };
                }
            }
            return new LoginResponseDto();
        }

        public async Task<bool> RegisterAsync(RegisterRequestDto registerRequestDto)
        {
            var newUser = new AppUser
            {
                Email = registerRequestDto.Email,
                Username = registerRequestDto.Username,
                Password = _passwordHasher.HashPassword(password: registerRequestDto.Password)
            };

            try
            {
                await _context.AppUsers.AddAsync(newUser);
                await _context.SaveChangesAsync();
                return true;
            }
            catch (Exception ex)
            {
                return false;
            }
        }
    }
}

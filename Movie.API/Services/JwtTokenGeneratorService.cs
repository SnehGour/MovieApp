using Microsoft.IdentityModel.Tokens;
using Movie.API.Models;
using Movie.API.Services.IServices;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace Movie.API.Services
{
    public class JwtTokenGeneratorService : IJwtTokenGeneratorService
    {
        private readonly string Issuer = "MovieAPI";
        private readonly string Audience = "MovieUI";
        private readonly DateTime ExpireTime = DateTime.Now.AddDays(1);
        private readonly string secret = "this is the security key for movie api...";
        private readonly IConfiguration _configuration;

        public JwtTokenGeneratorService(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        public string GenerateJwtToken(AppUser user)
        {
            //1. Header
            var algorithm = SecurityAlgorithms.HmacSha256;

            // 2. payload
            var claims = new Claim[]
            {
                new Claim(JwtRegisteredClaimNames.Name,user.Username),
                new Claim(JwtRegisteredClaimNames.Email,user.Email),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),

            };

            // 3. Signature

            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["Jwt:Key"]));
            var credentials = new SigningCredentials(securityKey, algorithm);

            var token = new JwtSecurityToken(_configuration["Jwt:Issuer"],
                _configuration["Jwt:Audience"],
                claims,
                expires: ExpireTime,
                signingCredentials: credentials);

            return new JwtSecurityTokenHandler().WriteToken(token);
        }
    }
}

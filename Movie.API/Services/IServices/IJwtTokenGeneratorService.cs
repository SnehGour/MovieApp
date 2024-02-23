using Movie.API.Models;

namespace Movie.API.Services.IServices
{
    public interface IJwtTokenGeneratorService 
    {
        string GenerateJwtToken(AppUser user);
    }
}

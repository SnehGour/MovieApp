using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Movie.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class MovieController : ControllerBase
    {
        public MovieController()
        {
            
        }

        [HttpGet]
        [Route("Get")]
        public string Get()
        {
            return "Main Hu Atal";
        }
    }
}

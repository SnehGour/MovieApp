using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Movie.API.Models.Dtos;
using Movie.API.Services.IServices;

namespace Movie.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MovieController : ControllerBase
    {
        private readonly IMovieService _movieService;
        private readonly IMapper _mapper;

        public MovieController(IMovieService movieService,
            IMapper mapper)
        {
            _mapper = mapper;
            _movieService = movieService;
        }

        [HttpGet]
        [Route("all-movies")]
        public async Task<List<MovieDto>> GetAllMovies()
        {
            var movieList = await _movieService.GetAllMoviesAsync();
            var movieListDto = _mapper.Map<List<MovieDto>>(movieList);
            return movieListDto;
        }
    }
}

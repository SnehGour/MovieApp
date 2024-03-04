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
    [Authorize]
    public class MovieController : ControllerBase
    {
        private readonly IMovieService _movieService;
        private readonly IMapper _mapper;
        private readonly IMovieSteamProvider _movieStreamService;
        private Response _response;
        public MovieController(IMovieService movieService,
            IMapper mapper,
            IMovieSteamProvider movieSteamProvider)
        {
            _response = new Response();
            _mapper = mapper;
            _movieService = movieService;
            _movieStreamService = movieSteamProvider;
        }

        [HttpGet]
        [Route("all-movies")]
        public async Task<List<MovieDto>> GetAllMovies()
        {
            var movieList = await _movieService.GetAllMoviesAsync();
            var movieListDto = _mapper.Map<List<MovieDto>>(movieList);
            return movieListDto;
        }

        [HttpGet]
        [Route("movie-by-id/{id}")]
        public async Task<Response> GetMovieById(int id)
        {
            if (id > 0)
            {
                try
                {
                    var movie = await _movieService.GetMovieByIdAsync(id);
                    var movieDto = _mapper.Map<MovieDto>(movie);
                    _response.IsSuccess = true;
                    _response.Result = movieDto;
                }
                catch (Exception ex)
                {
                    _response.Message = ex.Message;
                }
                return _response;
            }
            _response.Message = "Invalid Id or movie not found";
            return _response;
        }

        [HttpGet]
        [Route("stream")]
        public IActionResult Stream()
        {
            var movieUrl = _movieStreamService.GetMovieUrl();
            return new JsonResult(new
            {
                movieUrl
            }); 
        }
    }
}

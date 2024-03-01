using AutoMapper;
using Microsoft.AspNetCore.Identity.Data;
using Movie.API.Models.Dtos;

namespace Movie.API
{
    public class AutoMapperConfiguration
    {
        public static MapperConfiguration RegsiterMaps()
        {
            var mapper = new MapperConfiguration(config =>
            {
                config.CreateMap<LoginRequest,LoginRequestDto>().ReverseMap();
                config.CreateMap<MovieDto,Movie.API.Models.Movie>().ReverseMap();
                config.CreateMap<MyOrderDto,Movie.API.Models.MyOrders>().ReverseMap();
            });

            return mapper;
        }
    }
}

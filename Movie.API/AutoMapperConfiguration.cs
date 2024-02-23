﻿using AutoMapper;
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
            });

            return mapper;
        }
    }
}

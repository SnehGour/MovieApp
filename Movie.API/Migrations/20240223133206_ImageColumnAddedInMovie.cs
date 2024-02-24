﻿using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Movie.API.Migrations
{
    /// <inheritdoc />
    public partial class ImageColumnAddedInMovie : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Img",
                table: "Movies",
                type: "TEXT",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Img",
                table: "Movies");
        }
    }
}
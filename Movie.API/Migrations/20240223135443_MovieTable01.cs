using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Movie.API.Migrations
{
    /// <inheritdoc />
    public partial class MovieTable01 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "UpVote",
                table: "Movies",
                newName: "Year");

            migrationBuilder.RenameColumn(
                name: "Name",
                table: "Movies",
                newName: "Title");

            migrationBuilder.RenameColumn(
                name: "Img",
                table: "Movies",
                newName: "Poster");

            migrationBuilder.RenameColumn(
                name: "Description",
                table: "Movies",
                newName: "Plot");

            migrationBuilder.AddColumn<string>(
                name: "Director",
                table: "Movies",
                type: "TEXT",
                nullable: true);

            migrationBuilder.InsertData(
                table: "Movies",
                columns: new[] { "Id", "Director", "Plot", "Poster", "Price", "Title", "Year" },
                values: new object[] { 1, "Christopher Nolan", "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.", "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg", 100f, "The Dark Knight", 2008 });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Movies",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DropColumn(
                name: "Director",
                table: "Movies");

            migrationBuilder.RenameColumn(
                name: "Year",
                table: "Movies",
                newName: "UpVote");

            migrationBuilder.RenameColumn(
                name: "Title",
                table: "Movies",
                newName: "Name");

            migrationBuilder.RenameColumn(
                name: "Poster",
                table: "Movies",
                newName: "Img");

            migrationBuilder.RenameColumn(
                name: "Plot",
                table: "Movies",
                newName: "Description");
        }
    }
}

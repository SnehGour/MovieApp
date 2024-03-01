using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Movie.API.Migrations
{
    /// <inheritdoc />
    public partial class ChangingFKToEmailInOrder : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_MyrOrders_AppUsers_AppUserId",
                table: "MyrOrders");

            migrationBuilder.DropIndex(
                name: "IX_MyrOrders_AppUserId",
                table: "MyrOrders");

            migrationBuilder.DropColumn(
                name: "AppUserId",
                table: "MyrOrders");

            migrationBuilder.AddColumn<string>(
                name: "Email",
                table: "MyrOrders",
                type: "TEXT",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Email",
                table: "MyrOrders");

            migrationBuilder.AddColumn<int>(
                name: "AppUserId",
                table: "MyrOrders",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_MyrOrders_AppUserId",
                table: "MyrOrders",
                column: "AppUserId");

            migrationBuilder.AddForeignKey(
                name: "FK_MyrOrders_AppUsers_AppUserId",
                table: "MyrOrders",
                column: "AppUserId",
                principalTable: "AppUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}

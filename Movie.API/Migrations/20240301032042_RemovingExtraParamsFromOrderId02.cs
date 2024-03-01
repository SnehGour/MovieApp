using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Movie.API.Migrations
{
    /// <inheritdoc />
    public partial class RemovingExtraParamsFromOrderId02 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_MyrOrders_AppUsers_Id",
                table: "MyrOrders");

            migrationBuilder.RenameColumn(
                name: "Id",
                table: "MyrOrders",
                newName: "AppUserId");

            migrationBuilder.RenameIndex(
                name: "IX_MyrOrders_Id",
                table: "MyrOrders",
                newName: "IX_MyrOrders_AppUserId");

            migrationBuilder.AddForeignKey(
                name: "FK_MyrOrders_AppUsers_AppUserId",
                table: "MyrOrders",
                column: "AppUserId",
                principalTable: "AppUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_MyrOrders_AppUsers_AppUserId",
                table: "MyrOrders");

            migrationBuilder.RenameColumn(
                name: "AppUserId",
                table: "MyrOrders",
                newName: "Id");

            migrationBuilder.RenameIndex(
                name: "IX_MyrOrders_AppUserId",
                table: "MyrOrders",
                newName: "IX_MyrOrders_Id");

            migrationBuilder.AddForeignKey(
                name: "FK_MyrOrders_AppUsers_Id",
                table: "MyrOrders",
                column: "Id",
                principalTable: "AppUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}

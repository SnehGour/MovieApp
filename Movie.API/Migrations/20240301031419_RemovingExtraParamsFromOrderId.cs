using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Movie.API.Migrations
{
    /// <inheritdoc />
    public partial class RemovingExtraParamsFromOrderId : Migration
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

            migrationBuilder.RenameColumn(
                name: "CustomerId",
                table: "MyrOrders",
                newName: "Id");

            migrationBuilder.CreateIndex(
                name: "IX_MyrOrders_Id",
                table: "MyrOrders",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_MyrOrders_AppUsers_Id",
                table: "MyrOrders",
                column: "Id",
                principalTable: "AppUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_MyrOrders_AppUsers_Id",
                table: "MyrOrders");

            migrationBuilder.DropIndex(
                name: "IX_MyrOrders_Id",
                table: "MyrOrders");

            migrationBuilder.RenameColumn(
                name: "Id",
                table: "MyrOrders",
                newName: "CustomerId");

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

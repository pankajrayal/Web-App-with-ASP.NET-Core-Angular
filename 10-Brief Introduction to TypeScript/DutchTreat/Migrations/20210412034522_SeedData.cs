using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace DutchTreat.Migrations {
    public partial class SeedData : Migration {
        protected override void Up(MigrationBuilder migrationBuilder) {
            migrationBuilder.InsertData(
                table: "Orders",
                columns: new[] { "Id", "OrderDate", "OrderNumber" },
                values: new object[] { 1, new DateTime(2021, 4, 12, 3, 45, 22, 241, DateTimeKind.Utc).AddTicks(3289), "12345" });
        }

        protected override void Down(MigrationBuilder migrationBuilder) {
            migrationBuilder.DeleteData(
                table: "Orders",
                keyColumn: "Id",
                keyValue: 1);
        }
    }
}
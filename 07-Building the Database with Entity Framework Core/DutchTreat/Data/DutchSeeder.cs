using DutchTreat.Data.Entities;
using Microsoft.AspNetCore.Hosting;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text.Json;

namespace DutchTreat.Data {
    public class DutchSeeder {
        public DutchContext _ctx;
        public IWebHostEnvironment _env;

        public DutchSeeder(DutchContext ctx, IWebHostEnvironment env) {
            _ctx = ctx;
            _env = env;
        }

        public void Seed() {
            _ctx.Database.EnsureCreated();
            if (!_ctx.Products.Any()) {
                // Need to create sample data
                var filePath = Path.Combine(_env.ContentRootPath, "Data/art.json");
                var json = File.ReadAllText(filePath);
                var products = JsonSerializer.Deserialize<IEnumerable<Product>>(json);

                _ctx.Products.AddRange(products);

                var order = _ctx.Orders.Where(o => o.Id == 1).FirstOrDefault();
                if (order != null) {
                    order.Items = new List<OrderItem>() { 
                        new OrderItem(){ 
                            Product = products.First(),
                            Quantity = 5,
                            UnitPrice = products.First().Price
                        }
                    };
                }
                _ctx.SaveChanges();
            }
        }
    }
}
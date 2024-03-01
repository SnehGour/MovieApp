using Microsoft.EntityFrameworkCore;
using Movie.API.Data;
using Movie.API.Models;
using Movie.API.Models.Dtos;
using Movie.API.Services.IServices;

namespace Movie.API.Services
{
    public class OrderService : IOrderService
    {
        private readonly ApplicationDbContext _context;
        public OrderService(ApplicationDbContext context)
        {
            _context = context;
        }
        public async Task<bool> CreateAsync(MyOrders myOrder)
        {
            try
            {
                await _context.MyrOrders.AddAsync(myOrder);
                await _context.SaveChangesAsync();
                return true;
            }
            catch 
            {
                return false;
            }
        }

        public async Task<IEnumerable<MyOrders>> GetAsync(string email)
        {
            return await _context.MyrOrders.Where(x=>x.Email == email).ToListAsync();
        }
    }
}

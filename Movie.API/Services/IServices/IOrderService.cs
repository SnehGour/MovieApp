using Movie.API.Models;

namespace Movie.API.Services.IServices
{
    public interface IOrderService
    {
        Task<bool> CreateAsync(MyOrders myOrder);
        Task<IEnumerable<MyOrders>> GetAsync(string email);
    }
}

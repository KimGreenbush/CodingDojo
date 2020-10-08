using Microsoft.EntityFrameworkCore;
namespace Crudelicious.Models
{
    public class DishContext : DbContext
    {
        public DishContext(DbContextOptions options) : base(options) { }

        public DbSet<Dish> Dishes { get; set; }
    }
}
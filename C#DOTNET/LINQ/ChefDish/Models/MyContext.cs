using Microsoft.EntityFrameworkCore;
namespace ChefDish.Models
{
    public class MyContext : DbContext
    {
        public MyContext(DbContextOptions options) : base(options) { }
        public DbSet<ChefDish> ChefDishes { get;set;}
    }
}
using Microsoft.EntityFrameworkCore;

namespace WeddingPlanner.Models
{
    public class MyContext : DbContext
    {
        public MyContext(DbContextOptions options) : base(options) { }

        DbSet<Wedding> Weddings {get; set;}
        DbSet<User> Users {get; set;}
        DbSet<UserWedding> UsersWeddings {get; set;}

    }
}
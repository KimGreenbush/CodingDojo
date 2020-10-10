using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using ChefDish.Models;
namespace ChefDish
{
    public class Chef
    {
        [Key]
        [Required]
        public int ChefId { get; set; }

        [Required]
        public string FirstName { get; set; }

        [Required]
        public string LasstName { get; set; }

        [Required]
        public DateTime Birthday { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.Now;
        public DateTime UpdatedAt { get; set; } = DateTime.Now;
        public List<Dish> Dishes {get;set;}
    }
}
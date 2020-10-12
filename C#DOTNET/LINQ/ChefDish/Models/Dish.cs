using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace ChefDish.Models
{
    public class Dish
    {
        [Key]
        public int DishId { get; set; }

        [Required]
        [Display(Name = "Name of Dish")]
        public string Name { get; set; }

        [Required]
        [Display(Name = "Chef's Name")]
        public int ChefId { get; set; } // Foreign Key

        [Required]
        [Range(1, 5)]
        public int Tastiness { get; set; }

        [Required]
        [Range(1, 9999)]
        [Display(Name = "# of Calories")]
        public int Calories { get; set; }

        [Required]
        public string Description { get; set; }

        public DateTime CreatedAt { get; set; } = DateTime.Now;

        public DateTime UpdatedAt { get; set; } = DateTime.Now;

        public Chef Chef { get; set; } // nav prop
    }
}
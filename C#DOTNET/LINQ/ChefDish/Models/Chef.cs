using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace ChefDish.Models
{
    public class Chef
    {
        [Key]
        [Required]
        public int ChefId { get; set; }

        [Required]
        [Display(Name = "First Name")]
        public string FirstName { get; set; }

        [Required]
        [Display(Name = "Last Name")]
        public string LastName { get; set; }

        [Display(Name = "Date of Birth")]
        [DataType(DataType.Date)]
        [AgeValidation]
        public  DateTime? Birthday { get; set; }

        public  int Age
        {
            get
            {
                int year = 0;
                if (Birthday == null)
                {
                    Birthday = DateTime.Now;
                }
                else
                {
                year = ((DateTime)Birthday).Year;
                }
                int thisYear = DateTime.Now.Year;
                return thisYear - year;
            }
        }
        public DateTime CreatedAt { get; set; } = DateTime.Now;
        public DateTime UpdatedAt { get; set; } = DateTime.Now;
        public List<Dish> Dishes {get;set;} // nav prop, many
    }
}
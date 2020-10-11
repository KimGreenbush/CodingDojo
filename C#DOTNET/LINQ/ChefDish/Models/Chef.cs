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

        [Required]
        [Display(Name = "Date of Birth")]
        [DataType(DataType.Date)]
        public  DateTime Birthday { get; set; }

        public  string Age
        {
            get
            {
                DateTime today = DateTime.Now;
                string age = (today.Subtract(Birthday)).ToString();
                return age;
            }
        }
        public DateTime CreatedAt { get; set; } = DateTime.Now;
        public DateTime UpdatedAt { get; set; } = DateTime.Now;
        public List<Dish> Dishes {get;set;} // nav prop, many
    }
}
using System;
using System.ComponentModel.DataAnnotations;

namespace WeddingPlanner.Models
{
    public class LoginUser
    {
        [Required]
        [Display(Name="Email")]
        public string UserEmail { get; set; }

        [Required]
        [Display(Name="Password")]
        [DataType(DataType.Password)]
        public string UserPassword { get; set; }
    }
}
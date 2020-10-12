using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace ChefDish.Models
{
    public class AgeValidation : ValidationAttribute
    {
        protected override ValidationResult IsValid(object value, ValidationContext validationContext)
        {
            if(value == null)
            {
                return new ValidationResult("Please enter a date");
            }
            else if ((((DateTime)value).Year) > (DateTime.Now.Year -18))
            {
                return new ValidationResult("Chef must be 18+ years old.");
            }
            return ValidationResult.Success;
        }
    }
}

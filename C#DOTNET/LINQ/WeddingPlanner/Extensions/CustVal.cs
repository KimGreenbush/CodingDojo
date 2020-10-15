using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WeddingPlanner.Extensions
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

    public class DateValidation : ValidationAttribute
    {
        protected override ValidationResult IsValid(object value, ValidationContext validationContext)
        {
            if (value == null)
            {
                return new ValidationResult("Please enter a date");
            }
            else if ((DateTime)value < DateTime.Now.Date){
                return new ValidationResult("Must be a future date");
            }
            return ValidationResult.Success;
        }
    }
}

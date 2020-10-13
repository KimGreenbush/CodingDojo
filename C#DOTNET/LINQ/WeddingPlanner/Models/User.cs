using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WeddingPlanner.Models
{
    public class User
    {
    [Key]
    public int UserId { get; set; }

    [Required]
    [Display(Name="First Name")]
    public string FirstName { get; set; }

    [Required]
    [Display(Name="Last Name")]
    public string LastName { get; set; }

    [Required]
    [EmailAddress]
    public string Email { get; set; }

    [Required]
    [MinLength(8)]
    [DataType(DataType.Password)]
    public string Password { get; set; }

    [NotMapped]
    [Compare("Password")]
    [Display(Name = "Confirm Password")]
    [DataType(DataType.Password)]
    public string Confirm { get; set; }


    public DateTime CreatedAt { get; set; } = DateTime.Now;

    public DateTime UpdatedAt { get; set; } = DateTime.Now;

    public List<Wedding> PlannedWedding { get; set;} //1 to many

    public List<UsersWeddings> RSVPWeddings {get;set;} //many to many
    }
}
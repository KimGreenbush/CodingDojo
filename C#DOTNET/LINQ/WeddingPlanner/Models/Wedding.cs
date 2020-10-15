using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using WeddingPlanner.Extensions;

namespace WeddingPlanner.Models
{
    public class Wedding
    {
        [Key]
        public int WeddingId { get; set; }

        [Required]
        [Display(Name="Wedder One")]
        public string WedOne {get;set;}

        [Required]
        [Display(Name="Wedder Two")]
        public string WedTwo {get;set;}

        [Required]
        [DateValidation]
        [Display(Name="Wedding Date")]
        [DataType(DataType.Date)]
        public DateTime Date {get; set; }

        [Required]
        [Display(Name="Wedding Address")]
        public string Address { get; set; }

        public DateTime CreatedAt { get; set; } = DateTime.Now;
        public DateTime UpdatedAt { get; set; } = DateTime.Now;

        public User Planner { get; set; } //one to many

        public List<UserWedding> RSVPUsers{get;set;} //many to many
    }
}
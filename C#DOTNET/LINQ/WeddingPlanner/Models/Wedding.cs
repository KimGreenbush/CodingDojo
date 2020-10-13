using System;
using System.ComponentModel.DataAnnotations;

namespace WeddingPlanner.Models
{
    public class Wedding
    {
        [Key]
        public int WeddingId { get; set; }

        public string WedOne {get;set;}

        public string WedTwo {get;set;}

        public DateTime WedDate {get; set; }


        public DateTime CreatedAt { get; set; } = DateTime.Now;
        public DateTime UpdatedAt { get; set; } = DateTime.Now;

        public User Planner { get; set; } //one to many

        public List<UsersWeddings> RSVPUsers{get;set;} //many to many
    }
}
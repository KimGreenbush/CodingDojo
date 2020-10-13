using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace WeddingPlanner.Models
{
    public class UsersWeddings
    {
        public int UserId { get; set; }

        public int WeddingId { get; set; }

        public User Attendee {get;set;}

        public Wedding AttendingWedding {get;set;}

        public DateTime CreatedAt { get; set; } = DateTime.Now;

        public DateTime UpdatedAt { get; set; } = DateTime.Now;
    }
}
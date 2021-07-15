using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.ComponentModel;
using System.Data.Entity;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;

namespace BigSchool.Models
{
    public class ApplicationUser : IdentityUser
    {
        [DisplayName("Tên Giảng Viên")]
        public string Name { get; set; }
        public ICollection<Following> Followers { get; set; }
        public ICollection<Following> Followees { get; set; }

        public ApplicationUser()
        {
            Followers = new Collection<Following>();
            Followees = new Collection<Following>();
        }
        public async Task<ClaimsIdentity> GenerateUserIdentityAsync(UserManager<ApplicationUser> manager)
        {
            var userIdentity = await manager.CreateIdentityAsync(this, DefaultAuthenticationTypes.ApplicationCookie);
            return userIdentity;
        }
    }

    public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
    {
        public DbSet<Course> Courses { get; set; }
        public DbSet<Category> Categories { get; set; }
        public DbSet<Attendance> Attendances { get; set; }

        public DbSet<Following> Followings { get; set; }
        public ApplicationDbContext()
            : base("DefaultConnection", throwIfV1Schema: false)
        {
        }

        public static ApplicationDbContext Create()
        {
            return new ApplicationDbContext();
        }
        protected override void OnModelCreating(DbModelBuilder db)
        {
            //Set key for table 
            db.Entity<Attendance>().HasKey(sc => new { sc.LecturerId, sc.CourseId });


            //Relationship table
            db.Entity<Course>()
                .HasRequired(item => item.Lecturer)
                .WithMany()
                .WillCascadeOnDelete(false);

            db.Entity<Attendance>()
                .HasRequired(sc => (Course)sc.Course)
                .WithMany(s => s.Attendances)
                .HasForeignKey(sc => sc.CourseId);

            db.Entity<ApplicationUser>()
                .HasMany(fl => fl.Followers)
                .WithRequired(fl => fl.Followee)
                .WillCascadeOnDelete(false);

            db.Entity<ApplicationUser>()
                .HasMany(fl => fl.Followees)
                .WithRequired(fl => fl.Follower)
                .WillCascadeOnDelete(false);

            base.OnModelCreating(db);
        }
        }
}
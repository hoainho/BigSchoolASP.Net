namespace BigSchool.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class CreatetableAttendance : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Attendances",
                c => new
                    {
                        LecturerId = c.String(nullable: false, maxLength: 128),
                        CourseId = c.Int(nullable: false),
                    })
                .PrimaryKey(t => new { t.LecturerId, t.CourseId })
                .ForeignKey("dbo.AspNetUsers", t => t.LecturerId, cascadeDelete: true)
                .Index(t => t.LecturerId);
            
            CreateTable(
                "dbo.CourseAttendances",
                c => new
                    {
                        Course_Id = c.Int(nullable: false),
                        Attendance_LecturerId = c.String(nullable: false, maxLength: 128),
                        Attendance_CourseId = c.Int(nullable: false),
                    })
                .PrimaryKey(t => new { t.Course_Id, t.Attendance_LecturerId, t.Attendance_CourseId })
                .ForeignKey("dbo.Courses", t => t.Course_Id, cascadeDelete: true)
                .ForeignKey("dbo.Attendances", t => new { t.Attendance_LecturerId, t.Attendance_CourseId }, cascadeDelete: true)
                .Index(t => t.Course_Id)
                .Index(t => new { t.Attendance_LecturerId, t.Attendance_CourseId });
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Attendances", "LecturerId", "dbo.AspNetUsers");
            DropForeignKey("dbo.CourseAttendances", new[] { "Attendance_LecturerId", "Attendance_CourseId" }, "dbo.Attendances");
            DropForeignKey("dbo.CourseAttendances", "Course_Id", "dbo.Courses");
            DropIndex("dbo.CourseAttendances", new[] { "Attendance_LecturerId", "Attendance_CourseId" });
            DropIndex("dbo.CourseAttendances", new[] { "Course_Id" });
            DropIndex("dbo.Attendances", new[] { "LecturerId" });
            DropTable("dbo.CourseAttendances");
            DropTable("dbo.Attendances");
        }
    }
}

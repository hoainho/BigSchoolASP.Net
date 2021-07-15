namespace BigSchool.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class UpdatetableAttendance : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("dbo.CourseAttendances", "Course_Id", "dbo.Courses");
            DropForeignKey("dbo.CourseAttendances", new[] { "Attendance_LecturerId", "Attendance_CourseId" }, "dbo.Attendances");
            DropIndex("dbo.CourseAttendances", new[] { "Course_Id" });
            DropIndex("dbo.CourseAttendances", new[] { "Attendance_LecturerId", "Attendance_CourseId" });
            CreateIndex("dbo.Attendances", "CourseId");
            AddForeignKey("dbo.Attendances", "CourseId", "dbo.Courses", "Id", cascadeDelete: true);
            DropTable("dbo.CourseAttendances");
        }
        
        public override void Down()
        {
            CreateTable(
                "dbo.CourseAttendances",
                c => new
                    {
                        Course_Id = c.Int(nullable: false),
                        Attendance_LecturerId = c.String(nullable: false, maxLength: 128),
                        Attendance_CourseId = c.Int(nullable: false),
                    })
                .PrimaryKey(t => new { t.Course_Id, t.Attendance_LecturerId, t.Attendance_CourseId });
            
            DropForeignKey("dbo.Attendances", "CourseId", "dbo.Courses");
            DropIndex("dbo.Attendances", new[] { "CourseId" });
            CreateIndex("dbo.CourseAttendances", new[] { "Attendance_LecturerId", "Attendance_CourseId" });
            CreateIndex("dbo.CourseAttendances", "Course_Id");
            AddForeignKey("dbo.CourseAttendances", new[] { "Attendance_LecturerId", "Attendance_CourseId" }, "dbo.Attendances", new[] { "LecturerId", "CourseId" }, cascadeDelete: true);
            AddForeignKey("dbo.CourseAttendances", "Course_Id", "dbo.Courses", "Id", cascadeDelete: true);
        }
    }
}

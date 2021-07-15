namespace BigSchool.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddColNameforAttendance : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Courses", "LecturerName", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.Courses", "LecturerName");
        }
    }
}

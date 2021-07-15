namespace BigSchool.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class UpdateProperties : DbMigration
    {
        public override void Up()
        {
            AlterColumn("dbo.Courses", "Place", c => c.String());
        }
        
        public override void Down()
        {
            AlterColumn("dbo.Courses", "Place", c => c.Int(nullable: false));
        }
    }
}

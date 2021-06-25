using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(mbook.Startup))]
namespace mbook
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}

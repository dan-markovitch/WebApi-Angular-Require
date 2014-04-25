using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Routing;

namespace Single_Page_I
{
	public class WebApiApplication : System.Web.HttpApplication
	{
		private const string ROOT_DOCUMENT = "index.html";

		protected void Application_Start()
		{
			GlobalConfiguration.Configure(WebApiConfig.Register);
		}



        protected void Application_BeginRequest(Object sender, EventArgs e)
        {
            string url = Request.Url.LocalPath;
            string[] newURL = new string[1];
            newURL[0] = ROOT_DOCUMENT;
            if (!System.IO.File.Exists(Context.Server.MapPath(url)))
                Context.RewritePath(ROOT_DOCUMENT);
        }
	}
}

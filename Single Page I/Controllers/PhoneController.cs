using System;
using System.Collections.Generic;
using System.IO;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Models;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace Controllers
{
	public class PhoneController : ApiController
	{
		public PhoneController()
		{
		}

		public HttpResponseMessage Get(string id)
		{
			string singleFilePath = String.Format("{0}/../Data/phones/{1}.json", Helper.AssemblyDirectory, id);
			List<PhoneSimple> simplePhones = new List<PhoneSimple>();
			PhoneDetail phoneDetail = new PhoneDetail();
			//JsonSerializer serailizer = new JsonSerializer();
			string content = File.ReadAllText(singleFilePath);
			HttpResponseMessage response = new HttpResponseMessage();
			JToken token = JToken.Parse(content);

			if (token is JArray)
			{
				simplePhones = token.ToObject<List<PhoneSimple>>();
				response = Request.CreateResponse<List<PhoneSimple>>(HttpStatusCode.OK, simplePhones);
			}
			else if (token is JObject)
			{
				phoneDetail = token.ToObject<PhoneDetail>();
				response = Request.CreateResponse<PhoneDetail>(HttpStatusCode.OK, phoneDetail);
			}

			return response;
			//using (StreamReader json = File.OpenText(singleFilePath))
			//{
			//	using (JsonTextReader reader = new JsonTextReader(json))
			//	{
			//		if (token is JArray)
			//		{
			//			simplePhones = serailizer.Deserialize<List<PhoneSimple>>(reader);
			//		}
			//		else if (token is JObject)
			//		{
			//			phoneDetail = serailizer.Deserialize<PhoneDetail>(reader);
			//		}
					
			//	}
			//}

			//HttpResponseMessage response;
			//if (simplePhones.Count > 0)
			//	response = Request.CreateResponse<List<PhoneSimple>>(HttpStatusCode.OK, simplePhones);
			//else
			//	response = Request.CreateResponse<PhoneDetail>(HttpStatusCode.OK, phoneDetail);
			//return response;
		}
	}
}

namespace Models
{
	public class PhoneDetail
	{
		public string additionalFeatures { get; set; }
		public Android android { get; set; }
		public string[] availability { get; set; }
		public Battery battery { get; set; }
		public Camera camera { get; set; }
		public Connectivity connectivity { get; set; }
		public string description { get; set; }
		public Display display { get; set; }
		public Hardware hardware { get; set; }
		public string id { get; set; }
		public string[] images { get; set; }
		public string name { get; set; }
		public Sizeandweight sizeAndWeight { get; set; }
		public Storage storage { get; set; }
	}

	public class Android
	{
		public string os { get; set; }
		public string ui { get; set; }
	}

	public class Battery
	{
		public string standbyTime { get; set; }
		public string talkTime { get; set; }
		public string type { get; set; }
	}

	public class Camera
	{
		public string[] features { get; set; }
		public string primary { get; set; }
	}

	public class Connectivity
	{
		public string bluetooth { get; set; }
		public string cell { get; set; }
		public bool gps { get; set; }
		public bool infrared { get; set; }
		public string wifi { get; set; }
	}

	public class Display
	{
		public string screenResolution { get; set; }
		public string screenSize { get; set; }
		public bool touchScreen { get; set; }
	}

	public class Hardware
	{
		public bool accelerometer { get; set; }
		public string audioJack { get; set; }
		public string cpu { get; set; }
		public bool fmRadio { get; set; }
		public bool physicalKeyboard { get; set; }
		public string usb { get; set; }
	}

	public class Sizeandweight
	{
		public string[] dimensions { get; set; }
		public string weight { get; set; }
	}

	public class Storage
	{
		public string flash { get; set; }
		public string ram { get; set; }
	}

}
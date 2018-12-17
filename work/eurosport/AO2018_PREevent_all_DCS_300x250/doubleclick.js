// Dynamic Content variables and sample values
Enabler.setProfileId(10333946);
var devDynamicContent = {};

devDynamicContent.Dynamic_Test_Sheet1= [{}];
devDynamicContent.Dynamic_Test_Sheet1[0]._id = 0;
devDynamicContent.Dynamic_Test_Sheet1[0].Unique_ID = 1;
devDynamicContent.Dynamic_Test_Sheet1[0].Reporting_Label = "Service";
devDynamicContent.Dynamic_Test_Sheet1[0].Targeting_Column = "";

devDynamicContent.Dynamic_Test_Sheet1[0].Dimensions = "300x250";
devDynamicContent.Dynamic_Test_Sheet1[0].FR1_TXT_1 = "TENNIS IS<br/>BETTER<br/>WITH FANS…";
devDynamicContent.Dynamic_Test_Sheet1[0].FR1_TXT_1_COLOR = "#ffe23a";
devDynamicContent.Dynamic_Test_Sheet1[0].FR1_TXT_1_SIZE = 50;
devDynamicContent.Dynamic_Test_Sheet1[0].FR2_TXT_1 = "GRAND SLAM<br/>MANIA<br/>IS BACK!";
devDynamicContent.Dynamic_Test_Sheet1[0].FR2_TXT_1_COLOR = "#ffe23a";
devDynamicContent.Dynamic_Test_Sheet1[0].FR2_TXT_1_SIZE = 50;

devDynamicContent.Dynamic_Test_Sheet1[0].FR3_TXT_1 = "JOIN IN";
devDynamicContent.Dynamic_Test_Sheet1[0].FR3_TXT_1_COLOR = "#ffe23a";
devDynamicContent.Dynamic_Test_Sheet1[0].FR3_TXT_1_SIZE = 72;
devDynamicContent.Dynamic_Test_Sheet1[0].FR3_TXT_2 = "ANYTIME ANYWHERE";
devDynamicContent.Dynamic_Test_Sheet1[0].FR3_TXT_2_COLOR = "#ffe23a";
devDynamicContent.Dynamic_Test_Sheet1[0].FR3_TXT_2_SIZE = 24;

devDynamicContent.Dynamic_Test_Sheet1[0].FR4_TXT_1 = "AUSTRALIAN<br/>OPEN";
devDynamicContent.Dynamic_Test_Sheet1[0].FR4_TXT_1_COLOR = "#ffe23a";
devDynamicContent.Dynamic_Test_Sheet1[0].FR4_TXT_1_SIZE = 50;
devDynamicContent.Dynamic_Test_Sheet1[0].FR4_TXT_2 = "ALL COURTS<br/>ALL MATCHES LIVE";
devDynamicContent.Dynamic_Test_Sheet1[0].FR4_TXT_2_COLOR = "#ffffff";
devDynamicContent.Dynamic_Test_Sheet1[0].FR4_TXT_2_SIZE = 24;

devDynamicContent.Dynamic_Test_Sheet1[0].FR5_TXT_1 = "£9.99";
devDynamicContent.Dynamic_Test_Sheet1[0].FR5_TXT_1_COLOR = "#ffe23a";
devDynamicContent.Dynamic_Test_Sheet1[0].FR5_TXT_1_SIZE = 72;
devDynamicContent.Dynamic_Test_Sheet1[0].FR5_TXT_2 = "PER MONTH";
devDynamicContent.Dynamic_Test_Sheet1[0].FR5_TXT_2_COLOR = "#ffe23a";
devDynamicContent.Dynamic_Test_Sheet1[0].FR5_TXT_2_SIZE = 24;
devDynamicContent.Dynamic_Test_Sheet1[0].FR5_TXT_3 = "SUBSCRIBE";
devDynamicContent.Dynamic_Test_Sheet1[0].FR5_TXT_3_COLOR = "#ffe23a";
devDynamicContent.Dynamic_Test_Sheet1[0].FR5_TXT_3_SIZE = 24;
devDynamicContent.Dynamic_Test_Sheet1[0].FR5_TXT_4 = "£59.88 TOTAL PRICE, INCL. VAT. T&CS APPLY. SUBSCRIPTION REQUIRED.<BR/>AUTO RENEWS, UNLESS CANCELLED. INTERNET CONNECTION REQUIRED.<BR/>OFFER ONLY AVAILABLE IN THE UK.";
devDynamicContent.Dynamic_Test_Sheet1[0].FR5_TXT_4_COLOR = "#ffffff";
devDynamicContent.Dynamic_Test_Sheet1[0].FR5_TXT_4_SIZE = 8;


devDynamicContent.Dynamic_Test_Sheet1[0].IMG_1 = {};
devDynamicContent.Dynamic_Test_Sheet1[0].IMG_1.Url = "./FR1_IMG_1.jpg";
devDynamicContent.Dynamic_Test_Sheet1[0].IMG_1_COLOR_1 = "#00283c";
devDynamicContent.Dynamic_Test_Sheet1[0].IMG_1_COLOR_2 = "#0091d2";
devDynamicContent.Dynamic_Test_Sheet1[0].IMG_2 = {};
devDynamicContent.Dynamic_Test_Sheet1[0].IMG_2.Url = "./FR2_IMG_1.jpg";
devDynamicContent.Dynamic_Test_Sheet1[0].IMG_2_COLOR_1 = "#00283c";
devDynamicContent.Dynamic_Test_Sheet1[0].IMG_2_COLOR_2 = "#0091d2";
devDynamicContent.Dynamic_Test_Sheet1[0].IMG_3 = {};
devDynamicContent.Dynamic_Test_Sheet1[0].IMG_3.Url = "./FR3_IMG_1.jpg";

devDynamicContent.Dynamic_Test_Sheet1[0].AO2018_logo = {};
devDynamicContent.Dynamic_Test_Sheet1[0].AO2018_logo.Url = "./AO2018_logo.png";
devDynamicContent.Dynamic_Test_Sheet1[0].ESPplayer_LT_logo = {};
devDynamicContent.Dynamic_Test_Sheet1[0].ESPplayer_LT_logo.Url = "./ESPplayer_LT_logo.png";
devDynamicContent.Dynamic_Test_Sheet1[0].ESPplayer_MG_logo = {};
devDynamicContent.Dynamic_Test_Sheet1[0].ESPplayer_MG_logo.Url = "./ESPplayer_MG_logo.png";

devDynamicContent.Dynamic_Test_Sheet1[0].END_COLOR = "#0091d2";


// devDynamicContent.Dynamic_Test_Sheet1[0].Headline = "How can we <br> help you?";
// devDynamicContent.Dynamic_Test_Sheet1[0].Headline_Color = "#ff0000";
// devDynamicContent.Dynamic_Test_Sheet1[0].Headline_Font_Size = 12;
// devDynamicContent.Dynamic_Test_Sheet1[0].Headline_2 = "Our staff is here to make sure we meet all your needs.";
// devDynamicContent.Dynamic_Test_Sheet1[0].CTA = "Join Us";
// devDynamicContent.Dynamic_Test_Sheet1[0].Image_URL = {};
// devDynamicContent.Dynamic_Test_Sheet1[0].Image_URL.Url = "http://dclkserver.com/IMG_italian.jpg";
devDynamicContent.Dynamic_Test_Sheet1[0].Exit_URL = "www.google.com";
devDynamicContent.Dynamic_Test_Sheet1[0].Default = false;
devDynamicContent.Dynamic_Test_Sheet1[0].Active = true;
Enabler.setDevDynamicContent(devDynamicContent);

if (!Enabler.isInitialized()) {
	Enabler.addEventListener(studio.events.StudioEvent.INIT, enablerInitialized);
} else {
	enablerInitialized();
}

function enablerInitialized() {
	init();
// 	if (!Enabler.isVisible()) {
// 		Enabler.addEventListener(studio.events.StudioEvent.VISIBLE, init);
// 	} else {
// 		init();
// 	}
}

Helper.onClick = function() {
	Enabler.exitOverride("exit", dynamicContent.Dynamic_Test_Sheet1[0].Exit_URL);
}

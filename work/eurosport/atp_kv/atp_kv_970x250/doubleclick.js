// Dynamic Content variables and sample values


// Dynamic Content variables and sample values
Enabler.setProfileId(0);
var devDynamicContent = {};

devDynamicContent.Eurosport__ATP_Feed= [{}];
devDynamicContent.Eurosport__ATP_Feed[0]._id = 0;
devDynamicContent.Eurosport__ATP_Feed[0].Unique_ID = 1;
devDynamicContent.Eurosport__ATP_Feed[0].Reporting_Label = "test";
devDynamicContent.Eurosport__ATP_Feed[0].Targeting_Column = "";
devDynamicContent.Eurosport__ATP_Feed[0].TXT_1 = "EUROSPORT HOME OF TENNIS atp_1000_white BNP PARIBAS OPEN atp_1000_white INDIAN WELLS";
devDynamicContent.Eurosport__ATP_Feed[0].TXT_1_COLOR = "#FFFFFF";
devDynamicContent.Eurosport__ATP_Feed[0].TXT_1_SIZE = 1;
devDynamicContent.Eurosport__ATP_Feed[0].TXT_2 = "BNP PARIBAS OPEN atp_1000_purple INDIAN WELLS 4 - 17 MARS LIVE SUR EUROSPORT PLAYER";
devDynamicContent.Eurosport__ATP_Feed[0].TXT_2_COLOR = "#3f3359";
devDynamicContent.Eurosport__ATP_Feed[0].TXT_2_SIZE = 0.3;
devDynamicContent.Eurosport__ATP_Feed[0].TXT_3 = "atp_1000_white EUROSPORT HOME OF TENNIS atp_1000_white BNP PARIBAS OPEN";
devDynamicContent.Eurosport__ATP_Feed[0].TXT_3_COLOR = "#FFFFFF";
devDynamicContent.Eurosport__ATP_Feed[0].TXT_3_SIZE = 0.5;
devDynamicContent.Eurosport__ATP_Feed[0].Player_1 = {};
devDynamicContent.Eurosport__ATP_Feed[0].Player_1.Type = "file";
devDynamicContent.Eurosport__ATP_Feed[0].Player_1.Url = "../atp_kv-assets/player_1.png";
devDynamicContent.Eurosport__ATP_Feed[0].Player_2 = {};
devDynamicContent.Eurosport__ATP_Feed[0].Player_2.Type = "file";
devDynamicContent.Eurosport__ATP_Feed[0].Player_2.Url = "../atp_kv-assets/player_2.png";
devDynamicContent.Eurosport__ATP_Feed[0].Player_3 = {};
devDynamicContent.Eurosport__ATP_Feed[0].Player_3.Type = "file";
devDynamicContent.Eurosport__ATP_Feed[0].Player_3.Url = "../atp_kv-assets/player_3.png";
devDynamicContent.Eurosport__ATP_Feed[0].END_COLOR = "#00915a";
devDynamicContent.Eurosport__ATP_Feed[0].Exit_URL = {};
devDynamicContent.Eurosport__ATP_Feed[0].Exit_URL.Url = "https://www.eurosport.fr";
devDynamicContent.Eurosport__ATP_Feed[0].Default = true;
devDynamicContent.Eurosport__ATP_Feed[0].Active = true;
Enabler.setDevDynamicContent(devDynamicContent);

if (!Enabler.isInitialized()) {
	Enabler.addEventListener(studio.events.StudioEvent.INIT, enablerInitialized);
} else {
	enablerInitialized();
}

function enablerInitialized() {
	if (window.location.hostname == 'localhost' || window.location.hostname == '0.0.0.0')
		init();
	else if (!Enabler.isVisible()) {
		Enabler.addEventListener(studio.events.StudioEvent.VISIBLE, init);
	} else {
		init();
	}
}

Helper.onClick = function() {
	// Enabler.exitOverride("exit", dynamicContent.Eurosport__ATP_Feed[0].Exit
	window.open(dynamicContent.Eurosport__ATP_Feed[0].Exit_URL.Url, '_blank')
}

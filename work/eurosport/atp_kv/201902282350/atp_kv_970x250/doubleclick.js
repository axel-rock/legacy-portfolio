// Dynamic Content variables and sample values


// Dynamic Content variables and sample values
Enabler.setProfileId(0);
var devDynamicContent = {};

devDynamicContent.Eurosport__ATP_Feed= [{}];
devDynamicContent.Eurosport__ATP_Feed[0]._id = 0;
devDynamicContent.Eurosport__ATP_Feed[0].Unique_ID = 1;
devDynamicContent.Eurosport__ATP_Feed[0].Reporting_Label = "test";
devDynamicContent.Eurosport__ATP_Feed[0].Targeting_Column = "";
devDynamicContent.Eurosport__ATP_Feed[0].TXT_1_1 = "<i class='eurosport'></i>";
devDynamicContent.Eurosport__ATP_Feed[0].TXT_1_3 = "<i class='atp_1000'></i><i class='atp_500'></i><i class='atp_250'></i><i class='nitto_atp_finals'></i><i class='nextgen_atp_finals'></i><i class='australian_open'></i><i class='rolland_garos'></i><i class='us_open'></i>";
devDynamicContent.Eurosport__ATP_Feed[0].TXT_2_1 = "<i class='atp_1000'></i> BNP PARIBAS OPEN <i class='atp_1000'></i> EUROSPORT";
devDynamicContent.Eurosport__ATP_Feed[0].TXT_2_1_COLOR = "#FFFFFF";
devDynamicContent.Eurosport__ATP_Feed[0].TXT_2_1_SIZE = 1;
devDynamicContent.Eurosport__ATP_Feed[0].TXT_2_2 = "BNP PARIBAS OPEN <i class='atp_1000'></i> INDIAN WELLS <i class='space'></i> 4 - 17 MARS LIVE SUR EUROSPORT PLAYER";
devDynamicContent.Eurosport__ATP_Feed[0].TXT_2_2_COLOR = "#3f3359";
devDynamicContent.Eurosport__ATP_Feed[0].TXT_2_2_SIZE = 0.3;
devDynamicContent.Eurosport__ATP_Feed[0].TXT_2_3 = "EUROSPORT HOME OF TENNIS <i class='eurosport_player'></i> BNP PARIBAS OPEN";
devDynamicContent.Eurosport__ATP_Feed[0].TXT_2_3_COLOR = "#FFFFFF";
devDynamicContent.Eurosport__ATP_Feed[0].TXT_2_3_SIZE = 0.5;
devDynamicContent.Eurosport__ATP_Feed[0].TXT_3_1 = "BNP PARIBAS OPEN";
devDynamicContent.Eurosport__ATP_Feed[0].TXT_3_2 = "<span style='color:#4ee9a1;letter-spacing: 1px'>4 - 17 MARS LIVE</span>";
devDynamicContent.Eurosport__ATP_Feed[0].TXT_3_3 = "<i class='eurosport_player'></i>";
// devDynamicContent.Eurosport__ATP_Feed[0].TXT_3_3 = "<span style='color:#4ee9a1'>SUR</span> EUROSPORT PLAYER";
devDynamicContent.Eurosport__ATP_Feed[0].CTA = "PLUS D\'INFOS";
devDynamicContent.Eurosport__ATP_Feed[0].Player_1 = {};
devDynamicContent.Eurosport__ATP_Feed[0].Player_1.Type = "file";
devDynamicContent.Eurosport__ATP_Feed[0].Player_1.Url = "player_1.png";
devDynamicContent.Eurosport__ATP_Feed[0].Player_2 = {};
devDynamicContent.Eurosport__ATP_Feed[0].Player_2.Type = "file";
devDynamicContent.Eurosport__ATP_Feed[0].Player_2.Url = "player_2.png";
devDynamicContent.Eurosport__ATP_Feed[0].Player_3 = {};
devDynamicContent.Eurosport__ATP_Feed[0].Player_3.Type = "file";
devDynamicContent.Eurosport__ATP_Feed[0].Player_3.Url = "player_3.png";
devDynamicContent.Eurosport__ATP_Feed[0].Background = {};
devDynamicContent.Eurosport__ATP_Feed[0].Background.Type = "file";
devDynamicContent.Eurosport__ATP_Feed[0].Background.Url = "background_end.jpg";
devDynamicContent.Eurosport__ATP_Feed[0].BG_1 = "#00915a";
devDynamicContent.Eurosport__ATP_Feed[0].BG_2 = '#52446b';
devDynamicContent.Eurosport__ATP_Feed[0].Exit_URL = {};
devDynamicContent.Eurosport__ATP_Feed[0].Exit_URL.Url = "https://www.eurosport.fr";
devDynamicContent.Eurosport__ATP_Feed[0].Default = true;
devDynamicContent.Eurosport__ATP_Feed[0].Active = true;
Enabler.setDevDynamicContent(devDynamicContent);

init()

// if (!Enabler.isInitialized()) {
// 	Enabler.addEventListener(studio.events.StudioEvent.INIT, enablerInitialized);
// } else {
// 	enablerInitialized();
// }
//
// function enablerInitialized() {
// 	if (window.location.hostname == 'localhost' || window.location.hostname == '0.0.0.0')
// 		init();
// 	else if (!Enabler.isVisible()) {
// 		Enabler.addEventListener(studio.events.StudioEvent.VISIBLE, init);
// 	} else {
// 		init();
// 	}
// }

Helper.onClick = function() {
	// Enabler.exitOverride("exit", dynamicContent.Eurosport__ATP_Feed[0].Exit
	window.open(dynamicContent.Eurosport__ATP_Feed[0].Exit_URL.Url, '_blank')
}

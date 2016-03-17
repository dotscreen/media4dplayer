var Model = {};

/**
 * @author Johny EUGENE (DOTSCREEN)
 * @description Processes the data received by the API for menu, then launches the callback function
 * @param {Object} data The response returned by the request
 * @param {Object} jqXHR The jQuery XMLHttpRequest returned by the request
 * @param {Function} callback The function which will be triggered after data processing
 */

Model.getAppsList = function(data, jqXHR, callback){
    if (typeOf(data) === "object" && typeOf(data.list) === "array") {
        callback(data.list, jqXHR);
		
    }else{
        callback(null, jqXHR);
    }
};

/**
 * @author Johny EUGENE (DOTSCREEN)
 * @description Processes the data received by the API for menu, then launches the callback function
 * @param {Object} data The response returned by the request
 * @param {Object} jqXHR The jQuery XMLHttpRequest returned by the request
 * @param {Function} callback The function which will be triggered after data processing
 */

Model.getAppPlaylistsOfUser = function(xml, jqXHR, callback){
    if (jqXHR.status === 200) {

        if ((typeOf(xml) === "document" || typeOf(xml) === "xmldocument") && xml.getElementsByTagName('ebucore:ebuCoreMain')) {
           callback({
			   favorites:[
				   this.getProgramDetails(xml),{
			"title": "Le JT de France 2",
			"subtitle": "JT du 20h du mercredi 10 Février 2016",
			"detail": "Émission du 10 Février 2016",
			"thumbnail":"ressources/img/temp/programs/JT_20h00-thumb.png",
			"picture": "ressources/img/temp/programs/JT_20h00.png",
			"synopsis": "Le journal de 20 Heures est le grand rendez-vous de l'actualité de la journée sur France 2. Du lundi au jeudi, David Pujadas est au commande de ce journal TV de 40 minutes.<br />Le 20 Heures propose un tour d'horizon complet de l'actualité de la journée, enrichi par les nombreux reportages et duplex des envoyés spéciaux en France et à l’étranger,ainsi que les interventions des correspondants à travers le monde pour raconter et analyser l’actualité internationale. Après la présentation des titres, la rédaction décrypte les événements forts de l’actualité avec des infographies, des chroniques, des invités, et des experts sur le plateau pour expliquer les sujets qui font la Une. Ce programme est disponible ici en direct vidéo ou en replay après sa diffusion pour voir et revoir les précédentes éditions à volonté.",
			"relatedContent": [{
				   "title": "Le JT de France 3",
				   "subtitle": "Émission du 15 Novembre 2015",
				   "picture": "ressources/img/temp/related/icone_pt_video_JTFR3.png"
			   },{
				   "title": "Le JT de France 2",
				   "subtitle": "Émission du 14 Novembre 2015",
				   "picture": "ressources/img/temp/related/icone_pt_video_JTFR2.png"
			   },{
				   "title": "Le JT de France 2",
				   "subtitle": "Émission du 13 Novembre 2015",
				   "picture": "ressources/img/temp/related/icone_pt_video_JTFR2.png"
			   }],
		   "video":{
				"audiosList":["Français"],
				"subtitlesList":["Français"],
				"audioDescriptions":[{"lang":"Français", "url":"http://videos-pmd.francetv.fr/innovation/media4D/m4d--JT-20h-ondemand/manifest-ad.mpd"}],
				"ls":[{"lang":"LSF", "url":"http://videos-pmd.francetv.fr/innovation/media4D/m4d--JT-20h-ondemand/manifest-lsf.mpd"}],
				"url":"http://videos-pmd.francetv.fr/innovation/media4D/m4d--JT-20h-ondemand/manifest.mpd",
				"links":{
					dataMain:{},
					dataAD:{},
					dataLS:{},
					dataSub:{},
					dataEA:{},
					dataDI:{}
				}
			}
		},{
			"title": "Tchoupi",
			"subtitle": "",
			"detail": "Série d'animation | 5 minutes",
			"thumbnail":"ressources/img/temp/programs/TCHOUPI-thumb.png",
			"picture": "ressources/img/temp/programs/TCHOUPI.png",
			"synopsis": "T'choupi et Doudou est une série d'animation canado–belgo–française en 65 épisodes de 5 minutes, adaptée de la série de littérature de jeunesse T'choupi. <br/>En France, la série a été diffusée en 1999 sur Canal J, rediffusée en 2000 sur TiJi puis sur France 5 dans Zouzous depuis le 29 octobre 2012 et sur France 4 également dans Zouzous.",
			"relatedContent": [],
			"video":{
				"audiosList":["Français"],
				"subtitlesList":["Français"],
				"audioDescriptions":[{"lang":"Français", "url":"http://videos-pmd.francetv.fr/innovation/media4D/m4d--tchoupi-ondemand/manifest-ad.mpd"}],
				"ls":[{"lang":"LSF", "url":"http://videos-pmd.francetv.fr/innovation/media4D/m4d--tchoupi-ondemand/manifest-lsf.mpd"}],
				"url":"http://videos-pmd.francetv.fr/innovation/media4D/m4d--tchoupi-ondemand/manifest.mpd",
				"links":{
					dataMain:{},
					dataAD:{},
					dataLS:{},
					dataSub:{},
					dataEA:{},
					dataDI:{}
				}
			}
		},{
			"title": "La météo",
			"subtitle": "",
			"detail": "Emission du 08 Février 2016 | 5 minutes",
			"thumbnail":"ressources/img/temp/programs/METEO-thumb.png",
			"picture": "ressources/img/temp/programs/METEO.png",
			"synopsis": "",
			"relatedContent": [],
			"video":{
				"audiosList":["Français"],
				"subtitlesList":["Français"],
				"audioDescriptions":[{"lang":"Français", "url":"http://videos-pmd.francetv.fr/innovation/media4D/m4d--Meteo-ondemand/manifest-ad.mpd"}],
				"ls":[{"lang":"LSF", "url":"http://videos-pmd.francetv.fr/innovation/media4D/m4d--Meteo-ondemand/manifest-lsf.mpd"}],
				"url":"http://videos-pmd.francetv.fr/innovation/media4D/m4d--Meteo-ondemand/manifest.mpd",
				"links":{
					dataMain:{},
					dataAD:{},
					dataLS:{},
					dataSub:{},
					dataEA:{},
					dataDI:{}
				}
			}
		}]}, jqXHR);
        } else {
			callback(null, jqXHR);
        }
    } else {
            log("Subtitles.load.callback; status = " + jqXHR.status + " : " + jqXHR.statusText, "error");
    }
};

/**
 * @author Johny EUGENE (DOTSCREEN)
 * @description Processes the data received by the API for menu, then launches the callback function
 * @param {Object} data The response returned by the request
 * @param {Object} jqXHR The jQuery XMLHttpRequest returned by the request
 * @param {Function} callback The function which will be triggered after data processing
 */

Model.getProgramDetails = function(xml){
	var getDetails = function(programType, startDate, duration){
		
		var type = programType || "Émission";
		
		if($(startDate).length && $(startDate).attr("startDate")){
			var stringDate = $(startDate).attr("startDate").split("-");
			stringDate[2] = stringDate[2].split("+")[0];
			var date = new Date(stringDate[0], stringDate[1], stringDate[2]);
			var formatedDate = getStringDate(date.getFullYear(), date.getMonth()-1, date.getDate());			
		}
		
		var durationMin = "";
		if($(duration).length && $(duration).children().length){
			var stringDuration = $(duration).children().text().split(":"), hasHour, hasMin;
			durationMin =  " | ";
			if(parseInt(stringDuration[0],10)){
				hasHour = true;
				durationMin = durationMin + (parseInt(stringDuration[0],10) > 1 ? parseInt(stringDuration[0],10) + " heures" : parseInt(stringDuration[0],10) + " heure");
			}
			
			if(parseInt(stringDuration[1],10)){
				hasMin = true;
				
				if(hasHour){
					durationMin = durationMin + " ";
				}
				durationMin = durationMin + (parseInt(stringDuration[1],10) > 1 ? parseInt(stringDuration[1],10) + " minutes" : parseInt(stringDuration[1],10) + " minute");
			}
			
			if(parseInt(stringDuration[2],10)){
				
				if(hasMin){
					durationMin = durationMin + " ";
				}
				durationMin = durationMin + stringDuration[2];
			}
		}
		return type + " du " + formatedDate + durationMin;
	};
	var getLinkDetails = function(ctn){
		var data = {
			dataMain:{},
			dataLS:{},
			dataAD:{},
			dataSub:{},
			dataEA:{},
			dataDI:{},
			dataMC:{}
		};
		
		if($(ctn).length){
			
			var getData = function($data){
				var data = {};
				$data.children().each(function(){
					if($(this).attr("typeLabel")){
						data[$(this).attr("typeLabel")] = $(this).text().trim();
					}
				});
				return data;
			};
			
			var convertTrackLanguage = function(value, isFiveDotOne){
				value = typeOf(value) === "string" ? value.toLowerCase() : "";
				var values = {fra:"Français",und:"Indéterminé"};
				var lang = values[value] ? values[value] : value;
				if(isFiveDotOne){
					lang+= " 5.1";
				}
				return lang;
			};
			
			// Main
			var $data = $(getElementFromXML(ctn, "format", "ebucore", {type:"formatName", value:"Main"})),
				$audioFormat = getElementFromXML($data, "audioFormat", "ebucore");
			if($data.length && $audioFormat.length && $audioFormat.attr("audioPresenceFlag") === "true"){
				data.dataMain = getData($audioFormat);
				data.dataMain.url = getElementFromXML($data, "locator", "ebucore").text().trim();
				data.dataMain.lang = convertTrackLanguage(getElementFromXML($audioFormat, "audioTrack", "ebucore").attr("trackLanguage"));
			}
			
			// LS
			$data = $(getElementFromXML(ctn, "format", "ebucore", {type:"formatName", value:"SL"}));
			if($data.length && $data.attr("videoPresenceFlag") === "true"){
				data.dataLS = {
					url:getElementFromXML($data, "locator", "ebucore").text().trim()
				};
			}
			
			// AD
			$data = $(getElementFromXML(ctn, "format", "ebucore", {type:"formatName", value:"AD"}));
			$audioFormat = getElementFromXML($data, "audioFormat", "ebucore");
			if($data.length && $audioFormat.length && $audioFormat.attr("audioPresenceFlag") === "true"){
				data.dataAD = getData($audioFormat);
				data.dataAD.url = getElementFromXML($data, "locator", "ebucore").text().trim();
				data.dataAD.lang = convertTrackLanguage(getElementFromXML($audioFormat, "audioTrack", "ebucore").attr("trackLanguage"));
			}
			
			// SUB
			$data = $(getElementFromXML(ctn, "format", "ebucore", {type:"formatName", value:"TTML"}));
			if($data.length){
				data.dataSub = {
					url:getElementFromXML($data, "locator", "ebucore").text().trim()
				};
			}
			
			// Pour le 5.1; les dialogues et l'ambiance sont séparés. Il faut donc récupérer les 2 sources
			// EA
			$data = $(getElementFromXML(ctn, "format", "ebucore", {type:"formatName", value:"EA3"}));
			$audioFormat = getElementFromXML($data, "audioFormat", "ebucore");
			if($data.length && $audioFormat.length && $audioFormat.attr("audioPresenceFlag") === "true"){
				data.dataEA = getData($audioFormat);
				data.dataEA.url = getElementFromXML($data, "locator", "ebucore").text().trim();
				data.dataEA.lang = convertTrackLanguage(getElementFromXML($audioFormat, "audioTrack", "ebucore").attr("trackLanguage"), true);
			}
			
			// DI
			$data = $(getElementFromXML(ctn, "format", "ebucore", {type:"formatName", value:"DI"}));
			$audioFormat = getElementFromXML($data, "audioFormat", "ebucore");
			if($data.length && $audioFormat.length && $audioFormat.attr("audioPresenceFlag") === "true"){
				data.dataDI = getData($audioFormat);
				data.dataDI.url = getElementFromXML($data, "locator", "ebucore").text().trim();
			}
			
			// Pour le 5.1; les dialogues et l'ambiance incluent
			// MC
			/*$data = $(getElementFromXML(ctn, "format", "ebucore", {type:"formatName", value:"MC"}));
			$audioFormat = getElementFromXML($data, "audioFormat", "ebucore");
			if($data.length){
				data.dataMC = getData($audioFormat);
				data.dataMC.url = getElementFromXML($data, "locator", "ebucore").text().trim();
				data.dataMC.lang = convertTrackLanguage(getElementFromXML($audioFormat, "audioTrack", "ebucore").attr("trackLanguage"), true);
			}*/
		}
		return data;
	};
	
	var getAudiosList = function(data){
		var newList = [];
		newList.push(data.dataMain.lang);
		
		if(data.dataEA.lang || data.dataMC.lang){
			newList.push(data.dataEA.lang || data.dataMC.lang);
		}
		return newList;
	};
	
	var program = {
		"title": getTextFromElement(getElementFromXML(xml, "title", "dc")),
		"subtitle": getTextFromElement(getElementFromXML(xml, "alternativeTitle", "ebucore", {type:"typeLabel", value:"EpisodeTitle"})),
		"detail": getDetails(getTextFromElement(getElementFromXML(xml, "genre", "ebucore", {type:"typeDefinition", value:"ProgramType"})), getElementFromXML(xml, "alternative", "ebucore", {type:"typeLabel", value:"DateDiffusion"}), getElementFromXML(xml, "partDuration", "ebucore")),
		"thumbnail":"ressources/img/temp/programs/LMDJ-thumb.png",
		"picture": "ressources/img/temp/programs/LMDJ.png",
		"synopsis": getTextFromElement(getElementFromXML(xml, "description", "ebucore", {type:"typeLabel", value:"Synopsis"})),
		"relatedContent":[{
			   "title": "Le Monde de Jamy : A couper le souffle.",
			   "subtitle": "Des forêts et des hommes",
			   "picture": "ressources/img/temp/related/icone_pt_video_soufle.png"
		   },{
			   "title": "Le repas des koalas",
			   "subtitle": "Des forêts et des hommes",
			   "picture": "ressources/img/temp/related/icone_pt_video_koala.png"
		   },{
			   "title": "Attention sangsue !",
			   "subtitle": "Des forêts et des hommes",
			   "picture": "ressources/img/temp/related/icone_pt_video_sangsue.png"
		}]
	};
	
	program.video = {
		"links":getLinkDetails(getElementFromXML(xml, "part", "ebucore", {type:"partName", value:"Links"})),
		"subtitlesList":["Français"],
		"audioDescriptions":[{"lang":"Français", "url":"http://videos-pmd.francetv.fr/innovation/media4D/m4d--LMDJ4-ondemand/manifest-ad.mpd"}],
		"ls":[{"lang":"LSF", "url":"http://videos-pmd.francetv.fr/innovation/media4D/m4d--LMDJ4-ondemand/manifest-lsf.mpd"}]
	};
	
	program.video.audiosList = getAudiosList(program.video.links);	
	return program;
};
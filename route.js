//*** (IMPORTS STARTS ) ****
var update = require('./invoke.js');
var query = require('./query.js');
//***  IMPORTS ENDS ****
exports.invoke = function (request,reply) {
	console.log(request.body.header.event_const);
	var header = request.body.header.event_const;
	var jsonblob = request.body.jsonblob;
	console.log("Header value:"+header);
	var var_contractname;
	if(header === "CNST_CREATE_SUBSCRIBER_DETAILS_EVENT"){
		console.log("Routing CreateSubscriberRecord contract");
		var_contractname = "CreateSubscriberRecord";
	}
	if(header === "CNST_PREFERENCE_REGISTRATION_EVENT"){
		console.log("Routing PreferenceRegistration contract");
		var_contractname = "PreferenceRegistration";
	}
	if(header === "CNST_COMPLAINT_REGISTRATION_EVENT"){
		console.log("Routing CreateSubscriberComplaint contract");
		var_contractname = "CreateSubscriberComplaint";
	}
	if(header === "CNST_TELEREGISTER_EVENT"){
		console.log("Routing OnBoardTelemarketer contract");
		var_contractname = "OnBoardTelemarketer";
	}
	if(header === "CNST_ADDUPDATEPREFCATEGORY_EVENT"){
		console.log("Routing AddUpdatePreferenceCategory contract");
		var_contractname = "AddUpdatePreferenceCategory";
	}
	if(header === "CNST_ADDUPDATEPREFSUBCATEGORY_EVENT"){
		console.log("Routing AddUpdatePreferenceSubCategory contract");
		var_contractname = "AddUpdatePreferenceSubCategory";
	}
	if(header === "CNST_CREATETOKENID_EVENT"){
		console.log("Routing AddUpdatePreferenceSubCategory contract");
		var_contractname = "CreateTokenID";
	}
	console.log("contract at Routes layer:"+var_contractname);
	update.invokeSDK(var_contractname,jsonblob,reply);
}

// ***  ( QUERY SDK METHODS STARTS ) ***//      
exports.queryGetSubscriberAndPreferenceDetails = function (request,reply) {
	var var_contractname = "GetSubscriberAndPreferenceDetails";
	console.log("Routing "+var_contractname +" contract");
	query.querySDK(var_contractname, request, reply);
}
exports.queryGetsubcriberComplaintsByMobileNoComplaintNo = function (request,reply) {
	
	var var_contractname = "GetsubcriberComplaintsByMobileNoComplaintNo";
	console.log("Routing "+var_contractname+ " contract");
	query.querySDK(var_contractname, request, reply);
}
exports.queryGetTraiDetailedReport = function (request,reply) {
	var var_contractname = "GetTraiDetailedReport";
	console.log("Routing "+var_contractname+ " contract");
	query.querySDK(var_contractname, request, reply);
}

exports.queryscrubbing = function (request,reply) {
	var var_contractname = "ScrubbingService";
	console.log("Routing "+var_contractname+ " contract");
	query.querySDK(var_contractname, request, reply);
}
exports.queryGetTelemarketerDetails = function (request,reply) {
	var var_contractname = "GetTelemarketerDetails";
	console.log("Routing "+var_contractname+ " contract");
	query.querySDK(var_contractname, request, reply);
}
exports.queryGetPreferenceCategory = function (request,reply) {
	var var_contractname = "GetPreferenceCategory";
	console.log("Routing "+var_contractname+ " contract");
	query.querySDK(var_contractname, request, reply);
}
exports.queryGetAllPreferenceCategories = function (request,reply) {
	console.log("Routing "+var_contractname+ " contract");
	var var_contractname = "GetAllPreferenceCategories";
	query.querySDK(var_contractname, request, reply);
}
exports.queryGetTokenIDDetails = function (request,reply) {
	var fnName = "GetTokenIDDetails";
	query.querySDK(fnName, request, reply);
}
exports.queryGetSubCategoriesByCategoryID = function (request,reply) {
	var fnName = "GetSubCategoriesByCategoryID";
	query.querySDK(fnName, request, reply);
}
exports.queryGetPreferenceSubCategory = function (request,reply) {
	var fnName = "GetPreferenceSubCategory";
	query.querySDK(fnName, request, reply);
} 
exports.queryGetAllSubCategories = function (request,reply) {
	var fnName = "GetAllSubCategories";
	query.querySDK(fnName, request, reply);
}
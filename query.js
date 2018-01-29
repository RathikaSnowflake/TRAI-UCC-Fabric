var hfc = require('fabric-client');
var path = require('path');
var util = require('util');
exports.querySDK = function (fnName,request,reply) {
    var func_name = fnName;
    console.log ("Contract Received:"+func_name);
	if(func_name == "GetAllPreferenceCategories"){
        
       
    }
    if(func_name == "GetSubscriberAndPreferenceDetails"){
        var arg1_f1 = request.params.arg1;
        var arg2_f1 = request.params.arg2;
    }
   
    if(func_name == "GetsubcriberComplaintsByMobileNoComplaintNo"){
        var arg1_f2 = request.params.arg1;
       
    }
	
    if(func_name == "GetTraiDetailedReport"){
        var arg1_f3 = request.params.arg1;
        var arg2_f3 = request.params.arg2;
        var arg3_f3 = request.params.arg3;
        var arg4_f3 = request.params.arg4;
       
    }
    
    if(func_name == "ScrubbingService"){
        var arg1_f4 = request.params.arg1;
       
    }
    
    if(func_name == "GetTelemarketerDetails"){
        var arg1_f5 = request.params.arg1;
       
    }
    if(func_name == "GetPreferenceCategory"){
        var arg1_f6 = request.params.arg1;
       
    }
	
    if(func_name == "GetTokenIDDetails"){
        var arg1_f7 = request.params.arg1;
       
    }
    
	if(func_name == "GetSubCategoriesByCategoryID"){
        var arg1_f8 = request.params.arg1;
        var arg2_f8 = request.params.arg2;
              
    }
	
	if(func_name == "GetPreferenceSubCategory"){
        var arg1_f9 = request.params.arg1;
       
    }
	
	if(func_name == "GetAllSubCategories"){
           
    }
    var options = {
        wallet_path: path.join(__dirname, './creds'),
        user_id: 'PeerAdmin',
        channel_id: 'mychannel',
        chaincode_id: 'trai',
        network_url: 'grpc://192.168.99.100:7051',
    };
    var channel = {};
    var client = null;
    Promise.resolve().then(() => {
       console.log("Create a client and set the wallet location");
    client = new hfc();
    return hfc.newDefaultKeyValueStore({ path: options.wallet_path });
    }).then((wallet) => {
        console.log("Set wallet path, and associate user ", options.user_id, " with application");
    client.setStateStore(wallet);
    return client.getUserContext(options.user_id, true);
    }).then((user) => {
        console.log("Check user is enrolled, and set a query URL in the network");
    if (user === undefined || user.isEnrolled() === false) {
        console.error("User not defined, or not enrolled - error");
    }
    channel = client.newChannel(options.channel_id);
    channel.addPeer(client.newPeer(options.network_url));
    return;
    }).then(() => {
    console.log("Query Function to be called....");
    var transaction_id = client.newTransactionID();
    console.log("Assigning transaction_id: ", transaction_id._transaction_id);
	
	if(func_name == "GetAllPreferenceCategories"){
         const request = {
                chaincodeId: options.chaincode_id,
                txId: transaction_id,
                fcn: func_name,
              //  args: [arg1_f1]
                args:[]
            };
             console.log("Calling One GetAllPreferenceCategories Contract..");
            return channel.queryByChaincode(request);
    }
    if(func_name == "GetSubscriberAndPreferenceDetails"){
         const request = {
                chaincodeId: options.chaincode_id,
                txId: transaction_id,
                fcn: func_name,
              //  args: [arg1_f1]
                args: [arg1_f1,arg2_f1]
            };
             console.log("Calling One GetSubscriberAndPreferenceDetails Contract..");
            return channel.queryByChaincode(request);
    }
    
    if(func_name == "GetsubcriberComplaintsByMobileNoComplaintNo"){
        const request = {
               chaincodeId: options.chaincode_id,
               txId: transaction_id,
               fcn: func_name,
             //  args: [arg1_f1]
               args: [arg1_f2]
           };
            console.log("Calling One GetsubcriberComplaintsByMobileNoComplaintNo Contract..");
           return channel.queryByChaincode(request);
   }
    if(func_name == "GetTraiDetailedReport"){
        const request = {
               chaincodeId: options.chaincode_id,
               txId: transaction_id,
               fcn: func_name,
             //  args: [arg1_f1]
               args: [arg1_f3,arg2_f3,arg3_f3,arg4_f3]
           };
            console.log("Calling One GetTraiDetailedReport Contract..");
           return channel.queryByChaincode(request);
   }
    if(func_name == "ScrubbingService"){
        const request = {
               chaincodeId: options.chaincode_id,
               txId: transaction_id,
               fcn: func_name,
             //  args: [arg1_f1]
               args: [arg1_f4]
           };
            console.log("Calling One ScrubbingService Contract..");
           return channel.queryByChaincode(request);
   }
   
    if(func_name == "GetTelemarketerDetails"){
        const request = {
               chaincodeId: options.chaincode_id,
               txId: transaction_id,
               fcn: func_name,
             //  args: [arg1_f1]
               args: [arg1_f5]
           };
            console.log("Calling One GetTelemarketerDetails Contract..");
           return channel.queryByChaincode(request);
   }
    if(func_name == "GetPreferenceCategory"){
        const request = {
               chaincodeId: options.chaincode_id,
               txId: transaction_id,
               fcn: func_name,
             //  args: [arg1_f1]
               args: [arg1_f6]
           };
            console.log("Calling One GetPreferenceCategory Contract..");
           return channel.queryByChaincode(request);
   }
    if(func_name == "GetPreferenceCategories"){
        const request = {
               chaincodeId: options.chaincode_id,
               txId: transaction_id,
               fcn: func_name,
               args: []
             
           };
            console.log("Calling One GetPreferenceCategories Contract..");
           return channel.queryByChaincode(request);
   }
   if(func_name == "GetTokenIDDetails"){
        const request = {
               chaincodeId: options.chaincode_id,
               txId: transaction_id,
               fcn: func_name,
             //  args: [arg1_f1]
               args: [arg1_f7]
           };
            console.log("Calling One GetTokenIDDetails Contract..");
           return channel.queryByChaincode(request);
   }
    
	if(func_name == "GetSubCategoriesByCategoryID"){
        const request = {
               chaincodeId: options.chaincode_id,
               txId: transaction_id,
               fcn: func_name,
             //  args: [arg1_f1]
               args: [arg1_f8,arg2_f8]
           };
            console.log("Calling One GetSubCategoriesByCategoryID Contract..");
           return channel.queryByChaincode(request);
   }
	
	if(func_name == "GetPreferenceSubCategory"){
        const request = {
               chaincodeId: options.chaincode_id,
               txId: transaction_id,
               fcn: func_name,
             //  args: [arg1_f1]
               args: [arg1_f9]
           };
            console.log("Calling One GetTokenIDDetails Contract..");
           return channel.queryByChaincode(request);
   }
	
	if(func_name == "GetAllSubCategories"){
        const request = {
               chaincodeId: options.chaincode_id,
               txId: transaction_id,
               fcn: func_name,
             //  args: [arg1_f1]
               args: []
           };
            console.log("Calling One GetAllSubCategories Contract..");
           return channel.queryByChaincode(request);
   }
	
    }).then((query_responses) => {
	console.log("returned from query:"+query_responses);
	if (!query_responses.length) {
		console.log("No payloads were returned from query");
    } else {
    	console.log("Query result count = ", query_responses.length)
    }
    if (query_responses[0] instanceof Error) {
    	console.error("error from query = ", query_responses[0]);
    }
    console.log("Response is ", query_responses[0].toString());
    reply.send(util.format(query_responses[0].toString('utf8')));
    }).catch((err) => {
    	console.error("Caught Error", err);
    	reply.send ("Caught Error", err);
    });
}

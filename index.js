

module.exports = {


	// connect: function(host, callback){
	// 	// Connects to a websocket server
	// 	var socket = require('socket.io-client')(host);
	// }

	// track: function(event, callback){

	// 	// Receives an object/event and then pushes it to an array		

	// }

	// send: function(callback){

	// }

	send: function(data, host, callback){
		var socket = require('socket.io-client')(host);
		socket.on('connect', function(){
			socket.emit('data', JSON.stringify(data));
		});

		if (typeof callback === "function") {
			callback(data);		
		}


	}

}
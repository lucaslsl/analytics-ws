

module.exports = {


	send: function(data, host, callback){
		var socket = require('socket.io-client')(host);
		
		if(socket.connected){
			socket.emit('data', JSON.stringify(data));			
		}

		if (typeof callback === "function") {
			callback(data);		
		}


	}

}
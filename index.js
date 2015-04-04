

module.exports = {


	connect: function(host, callback){
		// Connects to a websocket server
	}

	track: function(event, callback){

		// Receives an object/event and then pushes it to an array
		if(event!=undefined){
			eventsTracked.push(event);
		}
		callback(event);

	}

	send: function(callback){

		if(connection){
			// If connected, sends eventsTracked to the websocket server
		}

	}

}
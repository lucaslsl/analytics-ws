var io = require('socket.io-client');


module.exports = Analytics;


function Analytics(host, options){
	this.host = host;
	options = options || {};
}


Analytics.prototype.track = function(type, message, callback){
	var socket = io(this.host);
	var response;

	if(socket.connected){
		socket.emit(type, JSON.stringify(message), function(response){
			if(response){
				response = response;
			}
		});			
	}

	if(callback && typeof(callback) === 'function'){
		callback(response);
	}


}

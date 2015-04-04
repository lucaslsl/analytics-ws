var io = require('socket.io-client');


module.exports = Analytics;


function Analytics(host, options){
	this.host = host;
	options = options || {};
}


Analytics.prototype.track = function(type, message){
	var socket = io(this.host);

	if(socket.connected){
		socket.emit(type, JSON.stringify(message));			
	}

	return this;

}

var io = require('socket.io-client');


module.exports = Analytics;


function Analytics(host, options){
	this.host = host;
	options = options || {};
	this.queue = [];
	this.sendWhen = options.sendWhen || 1;
}


Analytics.prototype.track = function(message){
	if(this.queue.length == sendWhen){
		this.send();
	}else{
		this.queue.push(message);		
	}

	return this;

}

Analytics.prototype.send = function(name){
	var socket = io(host);
	var msgs = 0;
	if(socket.connected){
		this.queue.forEach(function(e){
			socket.emit(name, JSON.stringify(e), function(err){
				if(!err){
					msgs++;
				}
			});			
		});
		if(msgs==this.queue.length){
			this.queue = [];
		}
	}
	
	return this;
}


// module.exports = {


// 	send: function(eventTracked, host, callback){
// 		var socket = io(host);
		
// 		if(socket.connected){
// 			socket.emit('eventTracked', JSON.stringify(eventTracked));			
// 		}

// 		if (typeof callback === "function") {
// 			callback(eventTracked);		
// 		}


// 	}

// }
var mongoose = require('mongoose');

var senzSchema = new mongoose.Schema(
		{
			"name": String,
            "serial": String,
                "img": String,
                "status": String,
                "Nimg": String,
                "Simg": String
		
		}	
		
		);

module.exports = mongoose.model('senz',senzSchema);

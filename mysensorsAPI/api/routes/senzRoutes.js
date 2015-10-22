var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var senzM = require('../models/senzModel.js');

/* GET /senz/ listing of devices . */

router.get('/',function(req,res,next){
  res.header("Access-Control-Allow-Origin", "http://localhost:8383");
  res.header("Access-Control-Allow-Methods", "GET, POST");
	senzM.find(function(err,senzRoutes){
	
		if(err)return next(err);
		res.json(senzRoutes);
	});
});

/*POST /senz/ add a device*/

router.post('/',function(req,res,next){
  res.header("Access-Control-Allow-Origin", "http://localhost:8383");
  res.header("Access-Control-Allow-Methods", "GET, POST");
	senzM.create(req.body,function(err,post){
		if(err) return next(err);
		res.json(post);
	
	});

});
 /* DELETE /senz/:id */ 
router.delete('/:id',function(req,res,next){
  res.header("Access-Control-Allow-Origin", "http://localhost:8383");
  res.header("Access-Control-Allow-Methods", "GET, POST");

	senzM.findByIdAndRemove(req.params.id,req.body, function(err,post){
	
			if(err)return next(err);
			res.json(post);
	
		});

});

/*DELETE /senz/ delete all */
/* router.delete('/',function(req,res,next){
  res.header("Access-Control-Allow-Origin", "http://localhost:8383");
  res.header("Access-Control-Allow-Methods", "GET, POST");
	senzM.remove(function(err){
		if(err) return next(err);
		res.json('everything gone!');
	
	});

}); */






/* PUT /senz/:id */
router.put('/:id',function(req,res,next){
  res.header("Access-Control-Allow-Origin", "http://localhost:8383");
  res.header("Access-Control-Allow-Methods", "GET, POST");
	senzM.findByIdAndUpdate(req.params.id,req.body,function(err,post){
	
		if(err)return next(err);
		res.json(post);
	
	});

});

module.exports = router;

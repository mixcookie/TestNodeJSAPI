	
    var express = require('express');
    var router = express.Router();
    router.get('/text',function(req,res){
	nid = req.query.id;
	sid = req.query.tar;
        tnum = req.query.num;	
	http = require("https");
	var httpreq = http.get("https://api.fixer.io/latest?base="+nid+"&symbols="+sid,function(response){
	response.setEncoding('utf8');
	response.on("data",function(data){
	var cart = JSON.parse(data);
	y = cart.rates;	
	if (sid=="NZD"){
		y = cart.rates.NZD;
	}
	if (sid=="USD"){
		y = cart.rates.USD;
	}
	if (sid=="JPY"){
		y = cart.rates.JPY;
	}
	if (sid=="MYD"){
		y = cart.rates.MYD;
	}
	if (sid=="EUR"){
		y = cart.rates.EUR;
	}
	if (sid=="CNY"){
		y = cart.rates.CNY;
	}
	if (sid=="HKD"){
		y = cart.rates.HKD;
	}
	if (sid=="AUD"){
		y = cart.rates.AUD;
	}
	console.log(y);
	//x = 100;
	if (sid!=nid){
	res.json({message:nid+" :1 can be converted to "+sid+" : "+y+"          "+nid+" : "+tnum+" can be converted to "+sid+ " : "+tnum*y});
	}
	else{
	res.json({message:"input currency type == output currency type"});
	}
	});
	});
    });

    module.exports = router;

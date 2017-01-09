var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('contact', { title: 'Contact Us' });
});


router.post('/send', function(req,res,next){
	var transporter = nodemailer.createTransport({
		service: 'Gmail',
		auth:{
			user: 'coen3463t18@gmail.com',
			pass: 'coen3463143'
		}
	});

	var mailOptions = {
		from: req.body.email,
		to: 'coen3463t18@gmail.com',
		subject: 'Order',
		text: 'I would like to avail the ' + req.body.event + ' with Package number ' + req.body.package + ' and a mode of payment of '+ req.body.payment + ' ' + req.body.message,
		html: '<p> You got a new message with the following details</p><ul><li> Name: '+req.body.name+'</li><li> Email: '+req.body.email+'</li><li> Event: '+req.body.event+'</li><li> Package: '+req.body.package+'</li><li> Mode of payment: '+req.body.payment+ '</li><li> Message: '+req.body.message +'</li></ul>'
	};
	transporter.sendMail(mailOptions, function(error, info){
		if(error){
			console.log(error);
			res.redirect('/');
		} else {
			console.log('Message sent: ' +info.response);
			res.redirect('/');
		}
	});
});
module.exports = router;

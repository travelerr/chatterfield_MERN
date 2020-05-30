var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var User = require('/Users/justinsacco/project-z/chatterfield/server/models/user.js');

router.get('/', function(req, res) {
    res.render('index')
});

router.route('/insert').post(function(req, res) {
    var User = new User();
    user.name = req.body.name;
    user.email = req.body.email;
    user.description = req.body.description;

    user.save(function(err) {
        if(err)
        res.send(err);
        res.send('User successfully added!')
    })
})

module.exports = router; 
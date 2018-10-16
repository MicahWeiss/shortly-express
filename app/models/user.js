var db = require('../config');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');

//Note to future Micah: This is a Model file. Note the folder name.

var User = db.Model.extend({
  tableName: 'users',
  defaults: {
    username: '',
    pasword: ''
  },
  register: function() {
    //make a new user check spec to see if they have a special name
    //you'll get input from some kinda form. You may need to implement this on
    //the front end.
  },
});

module.exports = User;
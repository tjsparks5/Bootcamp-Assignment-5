//This file holds any configuration variables we may need
//'config.js' is ignored by git to protect sensitive information, such as your database's username and password
//copy this file's contents to another file 'config.js' and store your MongoLab uri there

module.exports = {
  db: {
    uri: 'mongodb://tjsparks:Celtics5@ds123084.mlab.com:23084/softwaredb', //place the URI of your mongo database here.
  },
  googleMaps: {
    key: ''
  },
  port: 8080
};

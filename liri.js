//Twitter
// ------------------------------------------------------------------------

//Grabs Twitter API

  var twitter = require('twitter');
  var fs = requie('fs');
  var prompt = require('prompt');
  var Spotify = require('spotify');
  var request = require('request');

 //Grabs keys from Key.js

  var keys = require('../liri-node-app/key.js');

  var input = "";

  var pick = "";

  //Stores Twitter keys

  var myTweets = new twitter ({
  	consumer_key: keys.twitterKeys.consumer_key,
  	consumer_secret: keys.twitterKeys.consumer_secret,
  	access_token_key: keys.twitterKeys.access_token_key,
  	access_token_secret: keys.twitterKeys.access_token_secret,

  });

  //Stores account name, limits tweets to 20

  var params = {
  	screen_name: 'ty_rosen',
  	count: '20',
  	trim_user: false,
  }

  myTweets.get('statuses/user_timeline', params, function(error, timeline, response) {
  	if(!error) {
  	for (tweet in timeline) {

  		var date= new Date(timeline[tweet].created_at)

  		console.log(timeline[tweet].text);
  		console.log(date);

  	}

  	}

});

  //fs.appendFile('log.txt')
  //fs appendFile('log.txt')

//Spotify
// --------------------------------------------------------------------------------

var spotify = require('spotify');

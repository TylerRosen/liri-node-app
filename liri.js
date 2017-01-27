//Twitter
// ------------------------------------------------------------------------

//Grabs Twitter API

  var twitter = require('twitter');

 //Grabs keys from Key.js

  var keys = require('../liri-node-app/key.js');

  //Stores Twitter keys

  var myTweets = new twitter ({
  	consumer_key: keys.twitterKeys.consumer_key,
  	consumer_secret: keys.twitterKeys.consumer_secret,
  	access_token_key: keys.twitterKeys.access_token_key,
  	access_token_secret: keys.twitterKeys.access_token_secret,

  });

  myTweets.stream('statuses/filter', {track: 'twitter'},  function(stream) {
  stream.on('data', function(tweet) {
    console.log(tweet.text);
  });

  stream.on('error', function(error) {
    console.log(error);
  });
});


//Spotify
// --------------------------------------------------------------------------------

var spotify = require('spotify');

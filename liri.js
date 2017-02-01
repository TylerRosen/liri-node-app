//Global Variables
// ------------------------------------------------------------------------

//Grabs APIs

  var twitter = require('twitter');
  var fs = require('fs');
  var prompt = require('prompt');
  var Spotify = require('spotify');
  // var request = require('request');

 //Grabs keys from Key.js

  var keys = require('../liri-node-app/key.js');

  var input = "";

  var pick = "";

  //options

  var tweets = "my-tweets";
  var songs = "spotify-this-song";
  var movies = "movie-this";
  var doWhat = "do-what-it-says";

//Prompts

//-----------------------------------------------------------------------------------

prompt.message = ("Pick one: my-tweets, spotify-this-song, movie-this, do-what-it-says");

prompt.start();

prompt.get ({
  properties: {
    input: {
      description: ("Enter your choice")
    },
  },

}, function(err, result) {
  input = result.input;

    if(input == tweets) {
    myTwitter();

    }else if (input == songs) {
      prompt.get ({
        properties: {
          pick: {
             description: ("Enter a song")
        },    
    },

      }, function (err, result) {

        if (result.pick === ""){
          pick = "The Sign";
        }else {
          pick = result.pick;
        };

      spotify(pick);

      });

    }

},


      


  // Twitter
  // -------------------------------------------------------------------

  //Stores Twitter keys

  function myTwitter () {

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

  	  };

  	};

});

})

  //fs.appendFile('log.txt')
  //fs appendFile('log.txt')

//Spotify
// --------------------------------------------------------------------------------

var params = {
   type: 'track',
   query: input,
};

function spotify(input) {

Spotify.search(params, function(err, data) {
    if ( err ) {
        console.log('Error occurred: ' + err);
        return;
        var track = data.tracks.items;
          for (var i = 0; i<track.length; i++) {
            for (j=0; j<music[i].artists.length; j++) {
              console.log("Artist: " + music[i].artists[j].name);
              console.log("Song Name: " + music[i].name);
              console.log("Preview link: " + music[i].preview_url);
              console.log("Album Name: " + music[i].album.name + "\n");
            };
          };
    };
 
    
});

};

//OMDB
//---------------------------------------------------------------------------------

// var params = {
//   title: 'movieName',
// }

// request(params, function (error, response, body) {
// 	if (error && response.statusCode == 200) {
// 		console.log(body)

//   }else {
// 		console.log(title);
// 	}

// });
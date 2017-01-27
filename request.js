var request = require('request');
request('www.omdbapi.com/?', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body) // Show the HTML for the Google homepage. 
  }
})

// Grab the request package...
var request = require("request");

// Run the request function...
// The request function takes in a URL then returns three arguments:
// 1. It provides an error if one exists.
// 2. It provides a response (usually that the request was successful)
// 3. It provides the actual body text from the website <---- what actually matters.
request("https://www.spotify.com/us/", function(error, response, body) {
	if (!error && response.statusCode == 200) {

  // If the request was successful...

    // Then log the body from the site!
  console.log(body);

  }

});
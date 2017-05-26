var fs = require("fs");

var keys = require("./keys.js");

console.log(keys.twitterKeys.access_token_key);

var action = process.argv[2];
var value = process.argv[3];

switch (action) {
  case "my-tweets":
    twitter();
    break;

  case "spotify-this-song":
  //if process.argv.length ===3, spotify("the sign");
  //else
    spotify(value);
    break;

  case "movie-this":
    movie(value);
    break;

  case "do-what-it-says":
    doWhatItSays();
    break;
}
function twitter(){

var keys = require("./keys.js");
var Twitter = require('twitter');

console.log(keys.twitterKeys);

var client = new Twitter({
  consumer_key: keys.twitterKeys.consumer_key,
  consumer_secret: keys.twitterKeys.consumer_secret,
  access_token_key: keys.twitterKeys.access_token_key,
  access_token_secret: keys.twitterKeys.access_token_secret
});

var params = {screen_name: 'Monsterrehab142'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    var i, key;
for (i = 0; i < tweets.length; i++) {
    //  for (key in tweets[i]) {
    console.log(tweets);
        console.log(tweets[i].text);
        // console.log(tweets);
    //  }
    console.log(tweets[i].created_at);
}
    
  }
});
}
// twitter();


function spotify(song){

var spotify = require('spotify');
 
spotify.search({ type: 'track', query: song }, function(err, data) {
    if ( err ) {
        console.log('Error occurred: ' + err);
        return;
    }

    // console.log(data);
//  var i, key;
// for (i = 0; i < data.length; i++) {
    // Do something with 'data' 
//     var i, key;
// for (i = 0; i < data.length; i++) {


    //  console.log(data.tracks.items[0]);
    // console.log(data.tracks.items[0].artists[0].name);
    // console.log(data.tracks.items[0].name);
    

 var i, key;
     for (i = 0; i < data.tracks.items.length; i++) {
        console.log(data.tracks.items[i].name);
        console.log(song);
          if (song === data.tracks.items[i].name){


    console.log("Artist: " + data.tracks.items[i].artists[0].name);
    console.log("Track: " + data.tracks.items[i].name);
    console.log("Album: " + data.tracks.items[i].album.name);
    console.log("Preview link: " + data.tracks.items[i].href);
    return;
       }
    // console.log(data.artists.name);
  }
});
}

// spotify(value);

function movie (title){
  var request = require ("request");

  request("http://www.omdbapi.com/?apikey=40e9cece&t=$" + title + "&y=&plot=short&r=json", function(error, response, body){
    if (!error && response.statusCode === 200) {
        console.log("Title: " + JSON.parse(body).Title);
        console.log("Year: " + JSON.parse(body).Year);
        console.log("Rating: " + JSON.parse(body).imdbRating);
        console.log("Genre: " + JSON.parse(body).Country);
        console.log("Genre: " + JSON.parse(body).Language);
        console.log("Genre: " + JSON.parse(body).Plot);
        console.log("Genre: " + JSON.parse(body).Actors);
    }
});
}


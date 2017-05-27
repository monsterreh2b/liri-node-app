// Load the fs package to read and write
var fs = require("fs");
var request = require("request");
// Take two arguments.
// The first will be the action (i.e. "deposit", "withdraw", etc.)
// The second will be the amount that will be added, withdrawn, etc.
var action = process.argv[2];
var value = process.argv[3];
var arr = [];
// We will then create a switch-case statement (if-then would also work).
// The switch-case will direct which function gets run.
switch (action) {
  case "my-tweets":
    twitter();
    break;

  case "spotify-this-song":
    spotify(value);
    break;

  case "movie-this":
    movie();
    break;

  case "do-what-it-says":
    doWhatItSays();
    break;
}

// If the "total" function is called...
function doWhatItSays() {

  // We will read the existing bank file
  fs.readFile("random.txt", "utf8", function(err, data) {
    if (err) {
      return console.log(err);
    }

    // Break down all the numbers inside
    data = data.split(",");
    arr.push(data);
spotify(arr[1]);
    // Loop through those numbers and add them together to get a sum.
    // for (var i = 0; i < data.length; i++) {
    //   if (parseFloat(data[i])) {
    //     result += parseFloat(data[i]);
    //   }
    // }

    // We will then print the final balance rounded to two decimal places.
//     console.log("You have a total of " + result.toFixed(2));
   });
}

// If the "Deposit" function is called...
function deposit() {

  // We will add the value to the bank file.
  fs.appendFile("bank.txt", ", " + value, function(err) {
    if (err) {
      return console.log(err);
    }
  });

  // We will then print the value that was added (but we wont print the total).
  console.log("Deposited " + value + ".");
}

// If the "Withdraw" function is called
function withdraw() {

  // We will add a negative value to the bank file.
  fs.appendFile("bank.txt", ", -" + value, function(err) {
    if (err) {
      return console.log(err);
    }
  });

  // We will then print the value that was subtracted (but we wont print the total).
  console.log("Withdrew " + value + ".");
}


// If the "Lotto" function is called
function lotto() {

  // We will subtract 25 cents
  fs.appendFile("bank.txt", ", -.25", function(err) {
    if (err) {
      return console.log(err);
    }
  });

  // Then grab a random number
  var chance = Math.floor((Math.random() * 10) + 1);

  // If the random number equals 1...
  if (chance === 1) {

    // We will then add $2 to the account.
    fs.appendFile("bank.txt", ", 2", function(err) {
      if (err) {
        return console.log(err);
      }
    });

    // And tell the user the amount was added.
    console.log("Congrats you won the lottery!");

  // Otherwise we will tell them they lost 25 cents.
  }
  else {
    console.log("Sorry. You just lost 25 cents. Maybe you should get a job instead.");
  }
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
        console.log(tweets[i].text);
        // console.log(tweets);
    //  }
    console.log(tweets[i].created_at);
}
    
  }
});
}

function spotify(song){


}

function doWhatItSays{

var fs = require("fs");

fs.readFile("random.txt", "utf8", function(error,data){

    if(error){
        return console.log(error);
    }
  
    var dataArr = data.split(",");

    for (var i = 0; i< dataArr.length; i++){
        console.log(dataArr[i]);
    }
    
});



}

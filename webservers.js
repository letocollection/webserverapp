// * Using the previous example as a guide, create an app that has two web servers.
// * One that listens on port 7000 and one that listens on port 7500.
// * The one listening on port 7000 will always tell the user something good about themselves.
// * The one listening on 7500 will always tell the user something bad about themselves.
// * Make sure you create a Github repo and commit this code!

// **Bonus**
// * Generate the good / bad phrase randomly from a list of predefined phrases
// * Use the `twitter` package inside the response to also return a random tweet!

var http = require('http');



//ALWAYS GO ABOVE PORT 1024. 
var PORT1 = 7500;
var PORT2 = 7000;


//THIS CREATES A SERVER
function handleRequest1(request, response){
	response.end('You freakin suck! ' + request.url);
}

var server1 = http.createServer(handleRequest1);

//THIS CALLS THE SERVER
server1.listen(PORT1, function(){
	console.log("Server listening on: http://localhost:%s", PORT1);
});

// var http = require('http');





//THIS CREATES A SERVER
function handleRequest2(request, response){
	response.end('You are the shit!' + request.url);
}

var server2 = http.createServer(handleRequest2);

//THIS CALLS THE SERVER
server2.listen(PORT2, function(){
	console.log("Server listening on: http://localhost:%s", PORT2);
});


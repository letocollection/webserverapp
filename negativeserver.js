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
var PORT = 7500;


//THIS CREATES A SERVER
function handleRequest(request, response){
	response.end('It works!! Path Hit: ' + request.url);
}

var server = http.createServer(handleRequest);

//THIS CALLS THE SERVER
server.listen(PORT, function(){
	console.log("Server listening on: http://localhost:%s", PORT);
});


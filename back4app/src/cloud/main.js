/* Parse Server 3.x
* Parse.Cloud.define("hello", (request) => {
* 	return("Hello world!");
* });
*/

Parse.Cloud.define("test", (request) => {
  return("hello !!");
 });

// To see it working, you only need to call it through SDK or REST API.
// Here is how you have to call it via REST API:

/**
curl -X POST \
 -H "X-Parse-Application-Id: psLdcLlpjuQmXTsnEBh671Ms7oOIyFonSFi33jSt" \
 -H "X-Parse-REST-API-Key: 1rsCpKAjKj9EorxhhFbS8ZyTW3VnT0tx0IqoIoyx" \
 -H "Content-Type: application/json" \
 -d "{}" \
 https://parseapi.back4app.com/functions/hello
*/

// If you have set a function in another cloud code file, called "test.js" (for example)
// you need to refer it in your main.js, as you can see below:

/* require("./test.js"); */

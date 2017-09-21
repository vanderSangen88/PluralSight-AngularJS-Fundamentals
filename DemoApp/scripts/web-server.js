var express = require('express'); // bring in the express library and make it available in this file.
var path = require('path');
var app = express(); // create the express application.
var rootPath = path.normalize(__dirname + '/../'); // variable that points at the current directory + the root directory of the application.

app.use(express.static(rootPath + '/app')); // serves the pages in a given directory without processing them at all. Just passing them out as they are.

app.listen(8000);
console.log("Listening on port 8000...");
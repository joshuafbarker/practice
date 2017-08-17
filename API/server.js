const express = require('express');
const server = express();
const path = require('path');
const colors = require('colors');

const port = process.argv[2] || 3000;

// set up static server on root, and set to use all files in the public folder 
server.use('/', express.static(path.join(__dirname, 'public')));

// start server on provided port number, and log helper messages to console
server.listen(port, () => {
  console.log(' ');
  console.log(' ');
  console.log(`🖥  Server running and listening on PORT ${port}`.underline);
  console.log(' ');
  console.log(`Press Ctrl+C to stop server.`.red.bold);
});
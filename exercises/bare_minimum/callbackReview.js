/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var path = require('path');
var request = require('needle');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (filePath, callback) {
  fs.readFile(filePath, function(error, data) {
    if (!error) {
      callback(error, data.toString().split('\n')[0]);
    } else {
      callback(error);
    }

  });
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url, callback) {
  // TODO
  request.get(url, (err, data) => {
    if (err) {
      callback(err);
    } else {
      callback(err, data.statusCode);
    }
  });
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};

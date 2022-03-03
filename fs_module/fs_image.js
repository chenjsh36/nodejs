'use strict';

var fs = require('fs');

fs.readFile('test.jpg', function (err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data.length + 'bytes');
    }
});
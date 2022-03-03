'use strict';

var fs = require('fs');

var data = 'Hello, sync Node.js';
fs.writeFileSync('output.txt', data);
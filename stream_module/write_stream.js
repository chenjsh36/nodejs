'use strict';

var fs = require('fs');

var ws1 = fs.createWriteStream('output1.txt', 'utf-8');
ws1.write('使用Stream写入文本数据...\n');
ws1.write('END.');
ws1.end();

var ws2 = fs.createWriteStream('output2.txt');
var data = 'alloc 使用Stream写入二进制数据...\n';
var data2 = 'alloc END.';
ws2.write(Buffer.alloc(data.length, data, 'utf-8'));
ws2.write(Buffer.alloc(data2.length, data2, 'utf-8'));
ws2.end();
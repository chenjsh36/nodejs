const crypto = require('crypto');

const hash = crypto.createHash('md5');

// 可任意多次调用update():
hash.update('Hello, world!');
hash.update('Hello, nodejs!');

console.log(hash.digest('hex')); // 7e1977739c748beac0c0fd14fd26a544

const hash2 = crypto.createHash('md5');

// 可任意多次调用update():
hash2.update('Hello, world!');
hash2.update('Hello, world!');

console.log(hash2.digest('hex')); // ce5f17e0eb96d6f346809b793e096eb2


const hash3 = crypto.createHash('md5');

// 可任意多次调用update():
hash3.update('Hello, world!');

console.log(hash3.digest('hex')); // 6cd3556deb0da54bca060b4c39479839
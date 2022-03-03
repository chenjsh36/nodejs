const path = require('path');

const fp = path.resolve('path_test.js' || '');
console.log('path:', fp);

const fp2 = path.resolve(__dirname, '../..', 'path_test.js' || '');
console.log('path2:', fp2);


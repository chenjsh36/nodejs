const assert = require('assert').strict;

const a = [[[1, 2, 3]], 4, 5];
const b = a;

assert.deepEqual(a, b);

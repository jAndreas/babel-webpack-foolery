const crypto = require('crypto');

let rnd = crypto.randomBytes(16).toString('hex');

console.log('random bytes:\n', rnd);

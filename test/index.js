const { instance } = require('../cjs');

const abc = instance(Array, ...[, 'b', 'c']);

console.assert(abc('') instanceof Array);
console.assert(abc('a').join('-') === 'a-b-c');
console.assert(abc('d').join('-') === 'd-b-c');
console.assert(abc('a', void 0, 'a').join('-') === 'a-b-a');
console.assert(abc(...['a',,,'d']).join('-') === 'a-b-c-d');

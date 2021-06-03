// Run `node index.js` in the terminal
import _ from 'lodash';

console.log(`Hello Node.js v${process.versions.node}!`);

const c = _.uniq(['a', 'g', 'a']);
console.log(c);

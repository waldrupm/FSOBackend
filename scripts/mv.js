const shell = require('shelljs');

const args = process.argv.slice(2);
const src = args[0]
const dest = args[1]

if(!src || !shell.test('-d', src)) {
  console.log('\x1b[31m\x1b[40mERR!\x1b[0m src path cannot be found: %s', src);
  process.exit(1);
}

if(!dest) {
  console.log('\x1b[31m\x1b[40mERR!\x1b[0m no dest path provided:');
  process.exit(1);
}

shell.mkdir('-p', dest);

shell.mv(src, dest);
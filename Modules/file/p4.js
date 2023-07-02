const fs = require('fs')

const data = "All file system operations have synchronous ,callback,and promise-based forms,and are accessible using both commonJs syntax and ES6 modules (ESM)";

//sync writes
fs.writeFileSync('./documents/test2.txt',data)

console.log('sync write operation completed')
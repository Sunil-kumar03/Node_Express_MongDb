//zlib => The Zlib module provides a way of zip and unzip files.

const zlib= require('zlib')
const fs = require('fs')

let gzip= zlib.createGzip() //createGzip=>	Creates a Gzip object

let r= fs.createReadStream('myFile.txt')
let w= fs.createWriteStream('test.gz')

r.pipe(gzip).pipe(w)  //pipe => it is used to attach a readable stream to the writable Stream

console.log('zip generated')
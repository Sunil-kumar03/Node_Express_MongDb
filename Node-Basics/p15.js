
// path=>The Path module provides a way of working with directories and file paths.
const path = require('path')

console.log('path sep=',path.sep)

//join path =/content/sub/test.txt
const filepath=path.join(`/content/`,'sub','test.text')
console.log('filePath=',filepath)

//base path = (test.txt) Returns the last part of a path
const base = path.basename(filepath)
console.log('base path=',base)

//absolute path =>  Resolves the specified paths into an absolute path
const absolute=path.resolve(__dirname,'content','sub','test.txt')
console.log('absolute path=',absolute)
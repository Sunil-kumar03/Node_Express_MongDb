const fs=require('fs')

//sync append
const data = "\n\n synchronously append data to a file , creating the file if it does not exist"

fs.appendFileSync('./documents/test2.txt',data)

console.log('Append sync success')
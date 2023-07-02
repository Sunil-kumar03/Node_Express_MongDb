const util = require('util')

//templates
let myTemplate = `Hi %s, welcome to %s and duration of this course is %d months`

let u1=util.format(myTemplate,"Sunil","Node.js",1.5)
let u2=util.format(myTemplate,"kumar","ReactJs",1.2)

console.log('user1 =',u1)
console.log('user2 =',u2)
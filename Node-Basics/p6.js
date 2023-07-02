//Buffer Module => The buffers module provides a way of handling streams of binary data. 2.The Buffer object is a global object in Node.js, and it is not necessary to import it using the require keyword

// allocate memory

const buf = Buffer.alloc(4)
console.log('safe memory =',buf)

// unsafe memory
const buf1=Buffer.allocUnsafe(5)
console.log('unsafe memory=',buf1) //possible to have garbage values

//ASCII value
const buf2=Buffer.from('Sunil kumar')
console.log('ascii=',buf2)

//Ascii to string

console.log('string=',buf2.toString())

//concat
let a1=Buffer.from('Welcome to ')
let a2=Buffer.from('Node js server script')

let res=[a1,a2]

let out=Buffer.concat(res)

console.log('out=',out)
console.log('outString=',out.toString())
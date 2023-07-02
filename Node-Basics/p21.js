//large content text files

const fs= require('fs')

for(let i=0;i<500;i++){
    fs.writeFileSync('./content/sub/big.txt',`Hello World ${i}\n`,{flag:'a'})
}
console.log('Write completed')
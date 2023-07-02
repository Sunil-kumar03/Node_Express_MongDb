const x=123;
let y=23;

if (x>y) {
    console.log('x is greater than y')
} else {
    console.log('y is greater than x')
}

//loop
for (let i = 0; i <=10; i++) {
   console.log(x,'*',i,'=', x*i)
}

let users=['sunil','kumar','rajesh'];
users.forEach(getData);

function getData(item,index){
    console.log(index,':',item)
}
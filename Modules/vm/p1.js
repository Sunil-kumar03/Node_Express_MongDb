// vm=>The VM module provides a way of executing JavaScript on a virtual machine, almost like eval() in JavaScript.

const vm = require('vm')

let user ={
    name:'Sunil',
    email:'sunil@gmail.com',
    mobile:7702690294
};

console.log('before=', user);

vm.createContext(user)
vm.runInContext(`name='kumar'; email='kumar@gmail.com'`,user)

console.log('after=',user)
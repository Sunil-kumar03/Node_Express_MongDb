//asset module (package)-> exception (Runtime Errors)handling

const assert = require('assert')
//assert(10 > 12)

const x =[
    {
        name:'Sunil'
    }
];

const y={
    name:'sunil'
};

const z =[
    {
        name:'Sunil'
    }
];

//assert.deepStrictEqual(x,y) //Structure,datatype,prototype,case

assert.notDeepStrictEqual(x,z)
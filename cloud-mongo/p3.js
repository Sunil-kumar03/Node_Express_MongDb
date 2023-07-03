const { client } = require('./dbconnect')
const dbName="usersdb"

let data =[
    {
        name:'Sunil',
        email:"sunil@gmail.com"
    },
    {
        name:"kumar",
        email:'kumar@gmail.com'
    },
    {
        name:'shailaja',
        email:"shailaja@gamil.com"
    }
];

async function main(){
    try {
        await client.connect()
        console.log(`mongo connected`)
        const db = client.db(dbName)
        const collection = db.collection('users')
        const finResp = await collection.findOne({ name:"Sunil"}) // findOne()=> read single user data
        console.log(`users=`,finResp)
    } finally{
        await client.close()
    }
}

main().catch(err => console.log(err.message))
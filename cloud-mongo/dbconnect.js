const { MongoClient,ServerApiVersion} = require('mongodb')

const url ="mongodb+srv://sunilkumar:Sunil7702@cluster0.c0endwq.mongodb.net/?retryWrites=true&w=majority"

const client =new MongoClient(url,{
    serverApi:{
        version:ServerApiVersion.v1,
        deprecationErrors:true,
        strict:true
    }
})


module.exports= { client }

// async function main() {
//     try{
//         await client.connect()
//         console.log(`mongo connected`)
//     } finally{
//         await client.close()
//     }
// }
// main().catch(err => console.log(err.message))
//http module =>The HTTP module can create an HTTP server that listens to server ports and gives a response back to the client.

const http=require('http')
let port=3000

//node controller = function (req,res){}

//createServer=>Use the createServer() method to create an HTTP server:

http.createServer(function (req,res){
    res.writeHead(200,{'Content-Type': "text/html"})
    res.end(`<div>
                <h1>Welcome to Node http server module</h1>
                <p> this is our first message</p>
             </div>`)
}).listen(port) 

//  listen=> An HTTP listener, also known as a network listener, is a listen socket that has an Internet Protocol (IP) address, a port number, a server name, and a default virtual server.

console.log(`server is started running @ http:localhost:${port}`)
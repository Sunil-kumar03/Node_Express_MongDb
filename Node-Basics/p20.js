const http = require('http')
const port = 3500
const server=http.createServer()

//handling url request using event emitter
server.on('request',(req,res)=>{
    switch (req.url) {
        case "/":
            res.end(`<div>
                        <nav>
                            <a href="/">Home</a>
                            <a href="/about">About</a>
                            <a href="/service">Service</a>
                            <a href="/contact">Contact</a>
                        </nav>
                        <div>
                            <h1>Home Page</h1>
                        </div>
                    </div>`)
            break;
        case "/about":
            res.end(`<div>
                        <nav>
                            <a href="/">Home</a>
                            <a href="/about">About</a>
                            <a href="/service">Service</a>
                            <a href="/contact">Contact</a>
                        </nav>
                        <div>
                            <h1>About Page</h1>
                        </div>
                     </div>`)
            break;
            case "/contact":
                res.end(`<div>
                            <nav>
                                <a href="/">Home</a>
                                <a href="/about">About</a>
                                <a href="/service">Service</a>
                                <a href="/contact">Contact</a>
                            </nav>
                            <div>
                                <h1>contact Page</h1>
                            </div>
                         </div>`)
                break;
            default:
                res.end(`<div>
                         <h1>Requested Path Not Found</h1>
                         <a href="/">Return to home page</a>
                         </div>`)
                    break;
    }
})
server.listen(port)
console.log(`server is running @ http://localhost:${port}`)
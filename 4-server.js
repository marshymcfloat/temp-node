const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === "/"){
        res.end("Welcome to the homepage")
    }
    else if(req.url === "/about"){
        res.end("so this the short history.")
    }
    else{
        res.end(
            `
        <h1>oops! there is a problem</h1>
        <a href="/">home page</a>`)
    }

})
server.listen(5000)
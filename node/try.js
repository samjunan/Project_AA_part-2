// import http package
let http = require("http")
let fs = require("fs")

function iAmCallBackFunction(request,response){
    response.writeHead(200, {"Content-Type":"text/html"});
    fs.readFile("hello.txt",(error,data)=>{
        if(error){
            throw error;
        }
        console.log("File read success")
        let content = data.toString();
        response.write(content)
        response.end();
    })
}

// use http to create server
// createServer will create the server using call back function
// callback function does the actual job
let firstServer = http.createServer(iAmCallBackFunction)

firstServer.listen(8181)

// function(){


// }
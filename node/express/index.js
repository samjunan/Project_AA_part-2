// import express
let express = require("express")
let mongoose = require("mongoose")
let catalog = require('./catalog')

// create express app
let app = express()
app.use(express.json())

// connect  with mongodb
mongoose.connect("mongodb://localhost:27017/ecommence")
let db = mongoose.connection

db.once("open",()=>{
    console.log("MongoDB is connected")
})

// define first end point for get request
// request method is of type GET
app.get("/",(req,res)=>{
    console.log("I am in get request handler");
    res.json({
        "message":"This is GET",
        "type":"GET"
    })
})

app.get("/welcome",(req,res)=>{
    console.log("I am in get request handler");
    res.json({
        "message":"Welcome",
        "type":"GET"
    })
})

// define first end point for POST request
// request method is of type POST
app.post("/",(req,res)=>{
    console.log("I am in post request handler");
    res.json({
        "message":"This is response",
        "type":"POST"
    })
})

app.listen(8181,()=>{
    console.log("listening to port:"+8181);
})

// get all catalog names from mongodb
app.get("/catalog/all", (req, res)=>{
    catalog.find({}, (error,data)=>{
        if(error){
            res.send(error)
        }else{
            res.send(data)
        }
    })
})

// add a new document to mongodb
app.post("/catalog/add",(req, res)=>{
    //console.log(req)
    console.log(req.body)
    let nameReceived =  req.body.name
    let countReceived = req.body.productCount
    let cat = new catalog()
    cat.name = nameReceived
    cat.productCount = countReceived
    cat.save((err, data)=>{
        if(err){
            res.send(err)
        }else{
            res.send(data)
        }
    })

})

// Get -> retrieve data from backend
// Post -> add new data to backend
// Put -> Update the previously available data in the backend using given endpoint
// Delete -> Delete the previously available data in the backend using given endpoint

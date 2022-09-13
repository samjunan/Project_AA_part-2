let fs = require("fs")
fs.writeFile("file01.txt","Hello from space", (error)=>{
    if(error){
        throw error;
    }else{
        console.log("File write is success")
    }
})
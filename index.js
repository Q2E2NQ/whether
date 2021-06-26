const http = require("http");
const fs = require("fs");
var requests = require("requests");

const homefile = fs.readFileSync("home.html", "utf-8");
 const server = http.createserver((req, res) => {
   if(req.url == "/") {
  requests("http://file:///D:/whetherApp/home.html"
 .on("data", (chunk) => {
     console.log(chunk);
})
.on("end", (err) => {
    if (err) return console.log("connection close due to error", err);

    console.log("end");
    });

    
 server.listen(8000, "127.0.0.1");
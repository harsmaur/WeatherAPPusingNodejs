const http = require('http');
const fs = require('fs');
const requests = require('requests')


const homeFile = fs.readFileSync('home.html', 'utf-8')
const Server = http.createServer((req, res)=>{
    if(req.url == '/'){
        
    }
})
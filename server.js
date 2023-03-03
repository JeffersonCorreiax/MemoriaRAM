const http = require('http')
const stats = require('./ramUsage');

http.createServer((req, res) => {
    let url = req.url;
    if (url === '/stats'){
        res.end(JSON.stringify(stats, null, 2)) 
    } else {
        res.end(`<h1> Bem vindo, acesse /stats <h1>`)  
    }
}).listen(3333, ()=> console.log(stats));
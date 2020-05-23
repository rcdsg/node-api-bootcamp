const http = require('http');

const toDos = [
    {id: 1, nome: 'Paulo'},
    {id: 2, nome: 'Joao'},
    {id: 3, nome: 'Laura'}
]

const server = http.createServer((req, res) => {
    // First test
    //const {headers, url, method} = req
    //console.log(headers, url, method);
    //res.write('<h1>Olá Mundo!</h1>');

    // ** Adding Headers types **
    //res.setHeader('Content-Type', 'application/json');
    //res.setHeader('X-Powered-By', 'Node.js');
    
    res.writeHead( 200,{
        'Content-Type': 'application/json',
        'X-Powered-By': 'Node.js'
    })

    let body = []
    
    req.on('data', chunk =>{
        body.push(chunk);
    }).on('end', () =>{
        body = Buffer.concat(body).toString();
        console.log(body);
    })

    //console.log(req.headers.authorization);

    //Testing OBS

    res.end(
        JSON.stringify({
            success: true,
            data: toDos
        })
    );

})

const port = 3000;

server.listen(port, () => console.log(`The server is running on port ${port}`));
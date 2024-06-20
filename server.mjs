
import { createServer } from 'node:http';
import { unlink, writeFile } from 'node:fs';

// define request handler


// create HTTP server
const server = createServer((req, res) => {
    console.log(req.url);
    if (req.url.includes('create')) {
        //create file
        writeFile('./hello.html', '<h1>Learning Node Js</h1>', (err) => {
            console.log(err);
            //return response
            res.writeHead(200, { 'content-type': 'text/html' });
            res.end('<h1>file added<h1/>');

        })
    }
    else {

        //delete file
        unlink('./hello.html', () => {
            //return response
            res.writeHead(200, { 'content-type': 'text/html' });
            res.end('<h1>file deleted<h1/>');
        });

    }



});


// Listen for incoming request
server.listen(3000, '127.0.0.1', function () {
    console.log('server is running');
});


// Normal function VS Arrow Function
function handleReques() { }
const handleRequest = () => { }
// the `this` keyword behaves abnormally with the normal function but normal with the arrow function

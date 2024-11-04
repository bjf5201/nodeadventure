'use strict'
const http = require('http');

const src = process.argv[2];

const handleError = (err) => console.error(err);

http.get(src, (res) => {
    let body = '';
    res.setEncoding('utf8');
    res.on('error', handleError);
    res.on('data', (chunk) => {
    body += chunk;
    });
    res.on('end', () => {
        console.log(body.length);
        console.log(body);
    });
});
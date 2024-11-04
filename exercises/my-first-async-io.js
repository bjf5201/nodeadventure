'use strict';
const fs = require('fs');

fs.readFile(process.argv[2], 'utf8', (err, data) => {
    if (err) {
        console.error(err.message);
        throw err;
    } 
    console.log(data.split('\n').length - 1);
})

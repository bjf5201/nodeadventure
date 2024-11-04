'use strict'
const filterFiles = require('./mymodule');

const dirPath = process.argv[2];
const extension = process.argv[3];

filterFiles(dirPath, extension, (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => console.log(file));
})



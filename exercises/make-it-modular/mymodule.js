'use strict'
const fs = require('fs');

function filterFiles(folder, ext, callback) {
    fs.readdir(folder, (err, files) => {
        if (err) {
            return callback(err);
        }
        const filteredFiles = files.filter(file => file.endsWith(`.${ext}`));
        callback(null, filteredFiles);
    })
}

module.exports = filterFiles;
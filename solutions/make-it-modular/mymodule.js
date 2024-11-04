'use strict'
const fs = require('fs');
const path = require('path');

module.exports = function filterFiles(dir, filteredStr, callback) {
    fs.readdir(dir, (err, list) => {
        if (err) {
            return callback(err);
        }

        list = list.filter(file => path.extname(file) === `.${filteredStr}`);
        callback(null, list);
    })
}
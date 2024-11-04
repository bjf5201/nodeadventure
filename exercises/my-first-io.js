'use strict';
const fs = require('fs');

try {
    // Open the file and print the number of newlines to the console
    const fileContent = fs.readFileSync(process.argv[2], 'utf8');
    console.log(fileContent.split('\n').length - 1);
} catch (error) {
    console.error('Error reading file:', error);
}
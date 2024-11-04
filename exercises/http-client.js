/* # Excercise 7 of 13

 ## HTTP CLIENT (Exercise 7 of 13)  
   
  Create a file named http-client.js.  
   
  Write a program that performs an HTTP GET request to a URL provided to you  
  as the first command-line argument. Write the String contents of each  
  "data" event from the response to a new line on the console (stdout). */
'use strict'
const http = require('http');

const url = process.argv[2];

http.get(url, (response) => {
    response.setEncoding('utf8');
    response.on('error', (err) => {
        return console.error('Error:', err);
    })
    response.on('data', (data) => {
        console.log(data);
    })
    response.on('end', () => {
        if (!response.complete) {
            return console.error('Error: The connection was terminated while the message was still being sent');
        } 
    })
})
const request = require('request');
const fs = require('fs');
const args = process.argv.slice(2);


//make a request through CLI (args)
request(args[0], (error, response, body) => {
  //write the file to the path provided from args
  fs.writeFile(args[1], body, (error) => {
    const stat = fs.statSync(args[1]);
    if (error) {
      console.log("failed to write file");
    }
    if (stat.isDirectory() === false) {
      console.log("error");
      
    }
    console.log(`Downloaded and saved ${stat.size} bytes to ${args[1]}`);
  
  });
});




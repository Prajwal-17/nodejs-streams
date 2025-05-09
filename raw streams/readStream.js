// Readable Stream: A source of data that you can consume piece by piece. 

const fs = require("node:fs")   //import the fs module

const inputPath = "/media/hdd/Code/nodejs-streams/input.txt"    //input file 

const readStream = fs.createReadStream(inputPath, { encoding: "utf8" })    // create a readStream 

readStream.on("data", (chunk) => {      // setup and event listener for the data event 
  console.log(chunk)                    // a chunk is small piece of data or buffer of data
})

readStream.on("end", () => {                // setup an event listener once the entire file has been emitted 
  console.log("Finished Reading the file")
})

readStream.on("error", (err) => {           // setup and event listener to catch errors 
  console.log(err)
})

/**
 * Events in .on() methods
 * data - emitted whenever stream reads the data 
 * end - emitted when there is no more data
 * error - emitted when there is an error
 * close - emitted when the stream had been closed 
 */
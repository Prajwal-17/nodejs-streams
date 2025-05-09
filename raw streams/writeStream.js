// Writable Stream: A destination for data where you can write to it piece by piece. (e.g., fs.createWriteStream, HTTP request)

const fs = require("node:fs")   //import the fs module

const outputPath = "/media/hdd/Code/nodejs-streams/output.txt"   //output file

const content = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

const writeStream = fs.createWriteStream(outputPath, { encoding: "utf-8" })    // create a writeStream 

writeStream.write(content, "utf-8")           // write content to the destination

writeStream.on("finish", () => {              // setup and event listener once it finishs writing 
  console.log("Finished writing")
})

writeStream.on("end", () => {                // setup an event listener once the entire file has been written
  console.log("Finished Reading the file")
})

writeStream.on("error", (err) => {           // setup and event listener to catch errors 
  console.log(err)
})

/**
 * Events in .on() method
 * finish - Emitted after all data has been flushed to the underlying system.
 * error - Emitted when there is an error during the write operation.
 * close - Emitted when the stream and any underlying resources have been closed.
 * drain - Emitted when the internal buffer of the stream has been emptied, allowing more data to be written.
 * pipe - Emitted when the stream is the destination of a pipe() operation.
 * unpipe - Emitted when the stream is no longer the destination of a pipe() operation.
 */
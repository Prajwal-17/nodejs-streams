//Callback version
const fs = require("node:fs")

const inputPath = "/media/hdd/Code/nodejs-streams/input.txt"
const outputPath = "/media/hdd/Code/nodejs-streams/output.txt"

const readStream = fs.createReadStream(inputPath, { encoding: "utf-8" })
const writeStream = fs.createWriteStream(outputPath)

readStream.pipe(writeStream)

readStream.on("error", (err) => {
  console.log("Error reading the input file:", err);
});

readStream.on("end", () => {
  console.log("Finished reading the input file.");
});

writeStream.on("error", (err) => {
  console.error("Error writing to the output file:", err);
});

writeStream.on("finish", () => {
  console.log("Finished writing to the output file.");
});

//------------------------------------async version-------------------------------------------------

const fs = require("node:fs")
const { pipeline } = require("node:stream/promises")

const inputPath = "/media/hdd/Code/nodejs-streams/input.txt"
const outputPath = "/media/hdd/Code/nodejs-streams/output.txt"

async function main() {
  const readStream = fs.createReadStream(inputPath, { encoding: "utf-8" })
  const writeStream = fs.createWriteStream(outputPath)
  try {
    await pipeline(readStream, writeStream)
    console.log("Finished copying file")
  } catch (error) {
    console.log(error)
  }
}

main()
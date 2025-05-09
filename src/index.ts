import express, { Request, Response } from "express";
import statusMonitor from "express-status-monitor";
import fs from "node:fs";
import fsPromise from "node:fs/promises"

const app = express();

app.use(express.json());
app.use(statusMonitor());

app.get("/", (req: Request, res: Response) => {
  const filePath = "/media/hdd/Code/nodejs-streams/input.txt"
  try {
    const stream = fs.createReadStream(filePath, { encoding: "utf-8" });

    res.setHeader("Content-type", "text/plain") // set header to text plain 

    // Pipe the read stream directly to the response
    stream.pipe(res);

    stream.on("error", (err) => {
      console.error("Error reading file:", err);
      res.status(500).send("Error reading file.");
    });

    stream.on("finish", () => {
      console.log("Successfully streamed file");
    });
  } catch (error) {
    res.status(400).json({ msg: "Something went wrong" })
  }
});

app.get("/file", async (req: Request, res: Response) => {
  const filePath = "/media/hdd/Code/nodejs-streams/index.html"
  try {

    const file = await fsPromise.readFile(filePath)

    res.setHeader("Content-Type", "text/html")
    res.send(file)
  } catch (error) {
    res.status(400).json({ msg: "Something went wrong" })
  }
})

app.listen(4000, () => {
  console.log("App listening on port 3000");
});
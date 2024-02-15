const fs = require("fs");

const readStream = fs.createReadStream("./assets/largeTextFile.txt", {
  encoding: "utf-8",
});

const writeStream = fs.createWriteStream("./assets/streamFile.txt");

// readStream.on("data", (chunk) => {
//   console.log("------------------------");
//   console.log(chunk);
//   writeStream.write("\n new chunk\n");
//   writeStream.write(chunk);
// });

// piping

readStream.pipe(writeStream);

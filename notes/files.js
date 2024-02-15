const fs = require("fs");

// Reading files
// fs.readFile("./assets/test.txt", (error, data) => {
//   if (error) {
//     console.log(error);
//   }

//   console.log(data.toString());
// });

// Writing files

// fs.writeFile("./assets/test.txt", "new text", () => {
//   console.log("add new string");
// });

//  Directories
// if (!fs.existsSync("./assets/newDirectory")) {
//   fs.mkdir("./assets/newDirectory", (err) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log("created new folder");
//   });
// } else {
//   fs.rmdir("./assets/newDirectory", (err) => {
//     if (err) {
//       console.log(err);
//     }

//     console.log("folder removed");
//   });
// }

// Deliting files

if (fs.existsSync("./assets/testFile.txt")) {
  fs.unlink("./assets/testFile.txt", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("file delited");
  });
}

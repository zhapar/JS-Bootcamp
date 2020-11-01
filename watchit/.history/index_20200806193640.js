#!/usr/bin/env node

const chokidar = require("chokidar");

chokidar
  .watch(".")
  .on("add", () => console.log("File Added!"))
  .on("change", () => console.log("File Chaged!"))
  .on("unlink", () => console.log("File Deleted!"));

#!/usr/bin/env node

const debounce = require("lodash.debounce");
const chokidar = require("chokidar");

const start = debounce(() => {
  console.log("STARTING USERS PROGRAM!");
}, 100);

chokidar
  .watch(".")
  .on("add", start)
  .on("change", () => console.log("File Changed!"))
  .on("unlink", () => console.log("File Deleted!"));

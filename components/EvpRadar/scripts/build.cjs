"use strict";

process.env.BABEL_ENV = "development";
process.env.NODE_ENV = "development";

const path = require("path");
// const { cp } = require("fs");
const utils = require("./utils.cjs");
const { execSync } = require("child_process");

const dist = path.join(__dirname, "../dist");
const root = path.join(__dirname, "..");

try {
  console.log("Step 1 : cleaning up dist folder...");
  utils.deleteFolderRecursive(dist);
  console.log("Clean up dist folder success");
} catch (error) {
  console.log("Clean up dist folder failed");
}

console.log(`Step 2 : start compiling codes at index.tsx...`);

// execute npm install command and set cwd option to dist folder path
execSync("npx tsc --outDir dist", { cwd: root });

console.log("Packaged to dist successfully!");

"use strict";

// Do this as the first thing so that any code reading it knows the right env.
process.env.BABEL_ENV = "production";
process.env.NODE_ENV = "production";

const fs = require("fs");
const path = require("path");

/**
 * Copy a folder and files in it recursively
 * @param {*} source
 * @param {*} target
 * @param {string[]|undefined} excludeList files or folders to escape being copied
 */
function copyFolderSync(source, target, _excludeList) {
  const excludeList = _excludeList || [];
  // create the target folder if it doesn't exist
  if (!fs.existsSync(target)) {
    fs.mkdirSync(target);
  }

  // read the files in the source folder
  fs.readdirSync(source).forEach((file) => {
    const sourcePath = path.join(source, file);
    const targetPath = path.join(target, file);

    // copy it recursively if it is a folder and not in the exclude list
    if (fs.statSync(sourcePath).isDirectory() && !excludeList.includes(file)) {
      copyFolderSync(sourcePath, targetPath, excludeList);
    } else if (!excludeList.includes(file)) {
      // if it is a file and not in the exclude list, copy it directly
      fs.copyFileSync(sourcePath, targetPath);
    }
  });
}

/**
 * Delete a folder and files in it recursively
 * @param {*} folderPath
 * @param {string[]|undefined} excludeList files or folders to escape being deleted
 */
function deleteFolderRecursive(folderPath, _excludeList) {
  const excludeList = _excludeList || [];
  if (fs.existsSync(folderPath)) {
    fs.readdirSync(folderPath).forEach((file) => {
      const curPath = path.join(folderPath, file);
      if (!excludeList.includes(file)) {
        // escape the file or folder
        if (fs.lstatSync(curPath).isDirectory()) {
          // delete subfolders recursively
          deleteFolderRecursive(curPath, excludeList);
        } else {
          // delete folder files
          fs.unlinkSync(curPath);
        }
      }
    });
    // delete empty folders
    fs.rmdirSync(folderPath);
  }
}

module.exports = {
  copyFolderSync,
  deleteFolderRecursive,
};

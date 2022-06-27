#!/usr/bin/env node

const fs = require('fs');
const { lstat } = fs.promises;
const chalk = require('chalk');
const path = require('path');
// const process = require('process');
// console.log(process.cwd(), process.argv[2]);
const targetDir = process.argv[2] || process.cwd();

fs.readdir(targetDir, async (err, filenames) => {
    if (err) {
        // error handling code
        console.log(err);
    }
    // console.log(filenames);
    const statPromises = filenames.map((filename) => {return lstat(path.join(targetDir, filename))});
    const allStats = await Promise.all(statPromises);
    
    allStats.forEach((stats, idx) => {
        if (stats.isFile()) {
            console.log(filenames[idx]);
        } else {
            console.log(chalk.bold(filenames[idx]));
        }
    });

});

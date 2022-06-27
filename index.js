#!/usr/bin/env node

const fs = require('fs');

const { lstat } = fs.promises;
// const process = require('process');

fs.readdir(process.cwd(), async (err, filenames) => {
    if (err) {
        // error handling code
        console.log(err);
    }
    
    const statPromises = filenames.map((filename) => {return lstat(filename)});
    const allStats = await Promise.all(statPromises);
    
    allStats.forEach((stats, idx) => {
        console.log(filenames[idx], stats.isFile());
    });

});

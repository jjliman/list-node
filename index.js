const fs = require('fs');

fs.readdir('.', (err, filenames) => {
    if (err) {
        // error handling code
        console.log(err);
    }
    console.log(filenames);
});

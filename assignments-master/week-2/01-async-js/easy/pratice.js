const fs = require("fs")

fs.writeFile("Bharat.txt", data, (err) => {
    if (err) {
        console.error('Error writing file:', err);
        return;
    }
    console.log('Data written to output.txt successfully.');
});

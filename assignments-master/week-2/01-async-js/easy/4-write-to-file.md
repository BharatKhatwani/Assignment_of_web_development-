## Write to a file
Using the fs library again, try to write to the contents of a file.
You can use the fs library to as a black box, the goal is to understand async tasks.

 fs.writeFile("output.txt", data, (err) => {
        if (err) {
            console.error('Error writing file:', err);
            return;
        }
        console.log('Data written to output.txt successfully.');
    });
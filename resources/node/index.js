const fs = require('fs');
const path = require('path');

// Directory containing your PNG files
const directory = 'C:\\workspace\\interio\\resources\\materials\\tiles_lq';

fs.readdirSync(directory).forEach((filename) => {
  if (filename.endsWith('.PNG')) {  // Check for uppercase extension
    // Create the new filename with lowercase extension
    const newFilename = path.join(directory, path.basename(filename, '.PNG') + '.png');

    // Rename the file
    fs.renameSync(path.join(directory, filename), newFilename);
    console.log(`Renamed ${filename} to ${path.basename(newFilename)}`);
  }
});

console.log('Renaming completed.');

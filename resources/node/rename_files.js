const fs = require('fs');
const path = require('path');

// Specify the directory containing image files
const imageDirectory = 'C:\\workspace\\interio\\resources\\materials\\tiles_hq'; // Replace with your image directory

// Read image files in the directory
fs.readdir(imageDirectory, (err, files) => {
  if (err) {
    console.error('Error:', err);
    return;
  }

  // Iterate through image files
  files.forEach((file) => {
    const oldFilePath = path.join(imageDirectory, file);
    const newFileName = file.replace(/ /g, '_').toUpperCase(); // Replace spaces with underscores and convert to uppercase
    const newFilePath = path.join(imageDirectory, newFileName);

    // Rename the file to the new filename
    fs.rename(oldFilePath, newFilePath, (err) => {
      if (err) {
        console.error('Error renaming file:', err);
      } else {
        console.log(`Renamed file: ${file} -> ${newFileName}`);
      }
    });
  });
});

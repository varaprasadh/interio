const fs = require('fs');
const path = require('path');

// Specify the directory containing image files
const imageDirectory = 'C:\\workspace\\interio\\resources\\materials\\tiles_hq'; // Replace with your image directory

// Create an array to store image info objects
const imageInfoArray = [];

// Read image files in the directory
fs.readdir(imageDirectory, (err, files) => {
  if (err) {
    console.error('Error:', err);
    return;
  }

  // Iterate through image files
  files.forEach((file) => {
    const filename = file;
    const code = filename.replace(/ /g, '').toUpperCase(); // Remove spaces and convert to uppercase

    // Create an object with image info
    const imageInfo = {
      filename,
      code,
    };

    // Add the object to the array
    imageInfoArray.push(imageInfo);
  });

  // Create a JSON file with the image info array
  const jsonFilename = 'image_info.json';
  const jsonFilePath = path.join(imageDirectory, jsonFilename);

  fs.writeFile(jsonFilePath, JSON.stringify(imageInfoArray, null, 2), (err) => {
    if (err) {
      console.error('Error:', err);
    } else {
      console.log('JSON file created:', jsonFilePath);
    }
  });
});

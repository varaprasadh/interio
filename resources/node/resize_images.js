const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Directory containing your images
const inputDirectory = 'C:\\Users\\Varaprasadh\\workspace\\lab\\interio\\resources\\node\\target';
// Directory to save the resized images
const outputDirectory = `C:\\Users\\Varaprasadh\\workspace\\lab\\interio\\resources\\node\\resized`;

// Define the medium resolution (adjust as needed)
const targetSize = {
  width: 500,
  height: 500,
};

// Create the output directory if it doesn't exist
if (!fs.existsSync(outputDirectory)) {
  fs.mkdirSync(outputDirectory);
}

// Read the list of image files in the input directory
fs.readdir(inputDirectory, (err, files) => {
  if (err) {
    console.error('Error reading input directory:', err);
    return;
  }

  // Iterate through each image file
  files.forEach((file) => {
    const inputFilePath = path.join(inputDirectory, file);
    const outputFilePath = path.join(outputDirectory, file);

    // Check if the file is an image (adjust file extensions as needed)
    if (file.match(/\.(jpg|jpeg|png)$/i)) {
      sharp(inputFilePath)
        .resize(targetSize.width, targetSize.height, {
          fit: 'inside', // Preserve aspect ratio
        })
        .toFile(outputFilePath, (err, info) => {
          if (err) {
            console.error(`Error resizing ${file}:`, err);
          } else {
            console.log(`Resized ${file} to ${info.width}x${info.height}`);
          }
        });
    } else {
      console.log(`Skipping ${file} (not an image)`);
    }
  });
});

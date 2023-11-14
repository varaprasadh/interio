const fs = require('fs').promises;
const path = require('path');

// Function to move image files to the current folder
async function moveImagesToCurrentFolder(srcDir, extensions) {
  try {
    const files = await fs.readdir(srcDir);

    for (const file of files) {
      const filePath = path.join(srcDir, file);

      if ((await fs.stat(filePath)).isDirectory()) {
        // If it's a directory, recursively call the function
        await moveImagesToCurrentFolder(filePath, extensions);
      } else if (extensions.includes(path.extname(file).toLowerCase())) {
        const destPath = path.join(process.cwd(), "tiles" , file);

        // Check if the file already exists in the current directory
        if (!(await fs.access(destPath).then(() => true).catch(() => false))) {
          await fs.rename(filePath, destPath);
          console.log(`Moved: ${filePath}`);
        } else {
          console.log(`File '${file}' already exists in the current directory. Skipping.`);
        }
      }
    }
  } catch (err) {
    console.error('Error:', err);
  }
}

// Specify the source directory and image extensions
const sourceDirectory = 'C:\\workspace\\High Quality-20231029T122327Z-005\\High Quality'; // Change to your source directory
const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif']; // Add more extensions if needed

// Call the function to move image files to the current directory
moveImagesToCurrentFolder(sourceDirectory, imageExtensions)
  .then(() => {
    console.log('Done.');
  }).catch(console.log)

const fs = require('fs');
const path = require('path');

const imageDirectory = 'C:\\Users\\Varaprasadh\\workspace\\lab\\interio\\src\\assets\\tiles_lq'; // Replace with the path to your image directory
const outputFilePath = 'importedImages.js'; // Replace with your desired output file path

// Read the files in the image directory
fs.readdir(imageDirectory, (err, files) => {
    if (err) {
        console.error(`Error reading directory: ${err}`);
        return;
    }

    const imageImports = files
        .filter(file => file.endsWith('.png')) // Filter for PNG files (adjust file extension as needed)
        .map((file, index) => {
            const importName = `tiles_lq_${index + 1}`;
            const importPath = path.join(imageDirectory, file).replace(/\\/g, '/'); // Normalize path separators for Windows
            return `import ${importName} from "../${importPath}";`;
        })
        .join('\n');

    const javascriptCode = `// Generated image imports\n${imageImports}`;

    // Write the JavaScript code to the output file
    fs.writeFile(outputFilePath, javascriptCode, (err) => {
        if (err) {
            console.error(`Error writing output file: ${err}`);
        } else {
            console.log(`JavaScript code generated and saved to ${outputFilePath}`);
        }
    });
});

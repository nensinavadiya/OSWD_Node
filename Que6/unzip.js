



const fs = require('fs');
const zlib = require('zlib');

function decompressZlib(inputFilePath, outputFilePath) {
  const compressedData = fs.readFileSync(inputFilePath);
  zlib.unzip(compressedData, (error, decompressedData) => {
    if (error) {
      console.error('Error decompressing data:', error);
    } else {
      fs.writeFileSync(outputFilePath, decompressedData);
      console.log('Data successfully decompressed and saved to:', outputFilePath);
    }
  });
}

// Usage example:
const compressedFilePath = './Daxit.rar'; // Replace with the path of the zlib-compressed file
const decompressedFilePath = './d.txt.txt'; // Replace with the desired output file path

decompressZlib(compressedFilePath, decompressedFilePath);
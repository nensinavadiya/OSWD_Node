const fs = require('fs');
const util = require('util');
const unlinkAsync = util.promisify(fs.unlink);

async function removeFile(filePath) {
  try {
    await unlinkAsync(filePath);
    console.log(`File ${filePath} has been deleted successfully.`);
  } catch (err) {
    console.error(`Error deleting the file: ${err.message}`);
  }
}

const filePathToDelete = 'text.txt'; // Replace this with the actual file path
removeFile(filePathToDelete);

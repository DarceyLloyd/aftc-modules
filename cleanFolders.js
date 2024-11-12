const fs = require('fs');
const path = require('path');

function deleteFilesRecursively(dir) {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      deleteFilesRecursively(filePath);
    } else if (filePath.endsWith('.d.ts') || filePath.endsWith('.d.ts.map')) {
      fs.unlinkSync(filePath);
    //   console.log(`Deleted: ${filePath}`);
    }
  }
}


const targetDir = './src';
deleteFilesRecursively(targetDir);

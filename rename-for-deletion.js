const fs = require('fs');
const path = require('path');

// Files to rename for manual deletion
const filesToRename = [
  'nul',
  'tsconfig.tsbuildinfo',
  'src/components/ArticleHeroNew.tsx'
];

filesToRename.forEach(file => {
  if (fs.existsSync(file)) {
    const newName = `${file}.TO_DELETE`;
    try {
      fs.renameSync(file, newName);
      console.log(`Renamed: ${file} -> ${newName}`);
    } catch (error) {
      console.log(`Could not rename: ${file} - ${error.message}`);
    }
  } else {
    console.log(`File not found: ${file}`);
  }
});

console.log('\nFiles renamed. You can now manually delete them.');
console.log('After deleting, run: npm install clsx tailwind-merge');

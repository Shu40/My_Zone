const fs = require('fs');
const path = require('path');

const walkSync = (dir, filelist = []) => {
  fs.readdirSync(dir).forEach(file => {
    const dirFile = path.join(dir, file);
    try {
      filelist = walkSync(dirFile, filelist);
    } catch (err) {
      if (err.code === 'ENOTDIR' || err.code === 'EBADF') filelist.push(dirFile);
    }
  });
  return filelist;
};

const dirsToProcess = [
  'd:/HubDwarDev/src/components',
  'd:/HubDwarDev/src/app'
];

let files = [];
dirsToProcess.forEach(dir => {
  if (fs.existsSync(dir)) {
    files = [...files, ...walkSync(dir)];
  }
});

files = files.filter(f => f.endsWith('.tsx') || f.endsWith('.ts'));

const replacements = [
  // Remove text gradients
  { regex: /text-transparent bg-clip-text bg-gradient-to-[a-z]+ [^"']+/g, replacement: "text-secondary" },
  { regex: /text-transparent bg-clip-text/g, replacement: "" },
  // Ensure bad glowing buttons are removed
  { regex: /shadow-\[0_0_[0-9]+px_rgba\([^)]+\)\]/g, replacement: "shadow-md" },
];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let originalContent = content;
  
  replacements.forEach(({regex, replacement}) => {
    content = content.replace(regex, replacement);
  });
  
  if (content !== originalContent) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated: ${file}`);
  }
});

console.log("Done scrubbing gradients.");

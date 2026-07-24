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
  'd:/HubDwarDev/src/components/sections',
  'd:/HubDwarDev/src/components/animations',
  'd:/HubDwarDev/src/app',
  'd:/HubDwarDev/src/components/contact',
  'd:/HubDwarDev/src/components/about'
];

let files = [];
dirsToProcess.forEach(dir => {
  if (fs.existsSync(dir)) {
    files = [...files, ...walkSync(dir)];
  }
});

files = files.filter(f => f.endsWith('.tsx') || f.endsWith('.ts'));

const replacements = [
  // Banned words -> Enterprise terminology
  { regex: /\b(Future|Next Generation|Cutting Edge|Game Changer)\b/gi, replacement: "Enterprise" },
  { regex: /\b(Revolutionize)\b/gi, replacement: "Modernize" },
  { regex: /\b(AI Powered Everything)\b/gi, replacement: "Enterprise AI Solutions" },
  { regex: /\b(AI-driven automation)\b/gi, replacement: "Business Automation" },
  
  // Card Styles standardization
  { regex: /glass.*?rounded-(?:2xl|3xl|xl|lg)/g, replacement: "glass" },
  { regex: /glass.*?bg-white\/\d+/g, replacement: "glass" },
  { regex: /glass.*?border-white\/\d+/g, replacement: "glass" },
  { regex: /glass.*?shadow-\[.*?\]/g, replacement: "glass" },
  
  // Button standardization
  { regex: /<button(.*?)rounded-full(.*?)>/g, replacement: "<button$1rounded-[14px]$2>" },
  { regex: /<Link(.*?)rounded-full(.*?)>/g, replacement: "<Link$1rounded-[14px]$2>" },
  
  // Fonts
  { regex: /font-bold/g, replacement: "font-semibold" }
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

console.log("Done transforming.");

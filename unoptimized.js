const fs = require('fs');
const path = require('path');

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const f of files) {
    const fullPath = path.join(dir, f);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (f.endsWith('.tsx') || f.endsWith('.jsx')) {
      let code = fs.readFileSync(fullPath, 'utf8');
      
      // Find all <Image tags that have src starting with http
      // Example: <Image src="https://upload.wikimedia..." 
      const regex = /<Image([^>]+src=["']https?:\/\/[^"']+["'][^>]*)>/g;
      
      let modified = code.replace(regex, (match, p1) => {
        // If it already has unoptimized, skip
        if (p1.includes('unoptimized')) return match;
        
        // Add unoptimized={true}
        return `<Image unoptimized={true}${p1}>`;
      });
      
      if (modified !== code) {
        fs.writeFileSync(fullPath, modified);
        console.log('Added unoptimized to external images in: ' + fullPath);
      }
    }
  }
}

processDir('app');
processDir('components');

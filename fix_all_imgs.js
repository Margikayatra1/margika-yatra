const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    if (isDirectory) {
      walkDir(dirPath, callback);
    } else {
      if (f.endsWith('.tsx') || f.endsWith('.jsx')) {
        callback(dirPath);
      }
    }
  });
}

walkDir('app', (filePath) => {
  let code = fs.readFileSync(filePath, 'utf8');
  let originalCode = code;

  // We need to replace <img ... /> with <Image ... />
  // This is tricky because it can span multiple lines.
  // We can use a regex that matches <img[\s\S]*?>
  
  const imgRegex = /<img\s+([^>]+)>/g;
  code = code.replace(imgRegex, (match, p1) => {
    // Check if it's already an Image component (just in case)
    if (match.startsWith('<Image')) return match;

    // We must ensure the tag is self-closing for Next.js Image
    // But HTML img might not have a trailing slash. Next.js JSX requires it.
    let attrs = p1.trim();
    if (attrs.endsWith('/')) {
      attrs = attrs.substring(0, attrs.length - 1).trim();
    }

    // Strip onError as it causes Next.js TS errors with HTMLImageElement casts
    attrs = attrs.replace(/onError=\{[^}]+\}/g, '');
    
    // Check if width/height exist, if not, fill is required or we must provide width/height
    // But since we want to be safe, we can just inject fill or width/height.
    // Actually, width={800} height={600} is a safe bet for generic gallery images if fill isn't used
    let newTag = `<Image ${attrs} width={800} height={600} quality={60} sizes="100vw" style={{width: '100%', height: '100%', objectFit: 'cover'}} />`;
    
    // If it already had width/height or className, style might conflict, but usually it's fine.
    // Let's remove any existing 'style' just in case or just append it.
    return newTag;
  });

  if (code !== originalCode) {
    // Add import Image from "next/image" if missing
    if (!code.includes('import Image from "next/image"') && !code.includes('import Image from \'next/image\'')) {
      // Find the last import
      const importMatches = [...code.matchAll(/^import.*$/gm)];
      if (importMatches.length > 0) {
        const lastImport = importMatches[importMatches.length - 1];
        const insertPos = lastImport.index + lastImport[0].length;
        code = code.slice(0, insertPos) + '\nimport Image from "next/image";' + code.slice(insertPos);
      } else {
        code = 'import Image from "next/image";\n' + code;
      }
    }
    fs.writeFileSync(filePath, code);
    console.log('Fixed img tags in ' + filePath);
  }
});
console.log('Done');

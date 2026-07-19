const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    if (fs.statSync(dirPath).isDirectory()) {
      walkDir(dirPath, callback);
    } else {
      if (f.endsWith('.tsx') || f.endsWith('.jsx')) callback(dirPath);
    }
  });
}

walkDir('app', (filePath) => {
  let code = fs.readFileSync(filePath, 'utf8');
  let originalCode = code;

  // The broken pattern is:
  // onError={(e) = width={800} height={600} quality={60} sizes="100vw" style={{width: '100%', height: '100%', objectFit: 'cover'}} /> { (e.target as HTMLImageElement).src = 'something' }}
  //             />

  // Let's just regex replace this specific mess.
  const brokenRegex = /onError=\{\(e\)\s*=\s*width=\{800\}[^\/]+\/>\s*\{[^}]+\}\}\s*\/>/g;
  code = code.replace(brokenRegex, `width={800} height={600} quality={60} sizes="100vw" style={{width: '100%', height: '100%', objectFit: 'cover'}} />`);

  // Wait, the string was:
  // onError={(e) = width={800} height={600} quality={60} sizes="100vw" style={{width: '100%', height: '100%', objectFit: 'cover'}} /> { (e.target as HTMLImageElement).src = '/rambg.jpg' }}
  //             />
  
  // A safer regex:
  // Match `onError={(e) = width={800}` up to `}}` and then maybe `/>`
  const saferRegex = /onError=\{\(e\)\s*=\s*width=\{800\}[^>]+>\s*\{[^}]+\}\}(?:\s*\/>)?/g;
  code = code.replace(saferRegex, `width={800} height={600} quality={60} sizes="100vw" style={{width: '100%', height: '100%', objectFit: 'cover'}} />`);

  // Another possible broken pattern (from another file?):
  // Let's just catch any `onError={(e) = width={800} ...` up to `}}`
  const catchAll = /onError=\{\(e\)\s*=\s*width=\{800\}[\s\S]*?\}\}(?:\s*\/>)?/g;
  code = code.replace(catchAll, `width={800} height={600} quality={60} sizes="100vw" style={{width: '100%', height: '100%', objectFit: 'cover'}} />`);

  if (code !== originalCode) {
    fs.writeFileSync(filePath, code);
    console.log('Fixed syntax in ' + filePath);
  }
});

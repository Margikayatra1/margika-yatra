const fs = require('fs');

const dirs = ['app/packages/[id]'];
let filesToProcess = [];

dirs.forEach(dir => {
  const files = fs.readdirSync(dir).filter(f => f.endsWith('Detail.tsx'));
  files.forEach(f => filesToProcess.push(dir + '/' + f));
});

for (const path of filesToProcess) {
  let content = fs.readFileSync(path, 'utf8');
  
  if (!content.includes('import Image from "next/image"')) {
    if (content.includes('import Link from "next/link"')) {
      content = content.replace('import Link from "next/link"', 'import Link from "next/link"\nimport Image from "next/image"');
    } else {
      content = 'import Image from "next/image";\n' + content;
    }
  }

  const parts = content.split('<img ');
  let newContent = parts[0];

  for (let i = 1; i < parts.length; i++) {
    let part = parts[i];
    let endIdx = part.indexOf('/>');
    let isSelfClosing = true;
    if (endIdx === -1) {
      endIdx = part.indexOf('>');
      isSelfClosing = false;
    }
    
    if (endIdx !== -1) {
      let tagContent = part.substring(0, endIdx);
      let rest = part.substring(endIdx);
      
      let onErrorIdx = tagContent.indexOf('onError=');
      if (onErrorIdx !== -1) {
        let openBraces = 0;
        let endErrorIdx = -1;
        for (let j = onErrorIdx + 8; j < tagContent.length; j++) {
          if (tagContent[j] === '{') openBraces++;
          if (tagContent[j] === '}') {
            openBraces--;
            if (openBraces === 0) {
              endErrorIdx = j;
              break;
            }
          }
        }
        if (endErrorIdx !== -1) {
          tagContent = tagContent.substring(0, onErrorIdx) + tagContent.substring(endErrorIdx + 1);
        }
      }
      
      newContent += `<Image width={800} height={600} style={{ width: '100%', height: '100%', objectFit: 'cover' }} ` + tagContent + rest;
    } else {
      newContent += '<img ' + part; 
    }
  }
  
  fs.writeFileSync(path, newContent);
}

// Also fix the Next Dynamic in page.tsx!
const pagesToFix = [
  'app/packages/[id]/page.tsx',
  'app/kerala-tour-packages-from-mumbai/page.tsx',
  'app/ujjain-omkareshwar-tour-package/page.tsx'
];

for (const pagePath of pagesToFix) {
  if (fs.existsSync(pagePath)) {
    let pageContent = fs.readFileSync(pagePath, 'utf8');
    
    // For [id]/page.tsx
    if (pagePath.includes('[id]/page.tsx')) {
        pageContent = pageContent.replace(/import nextDynamic from 'next\/dynamic'\n+const VaranasiPrayagrajAyodhyaDetail = nextDynamic\(\(\) => import\('\.\/VaranasiPrayagrajAyodhyaDetail'\)\.then\(mod => mod\.VaranasiPrayagrajAyodhyaDetail\)\)\nconst RameshwaramDetail = nextDynamic\(\(\) => import\('\.\/RameshwaramDetail'\)\.then\(mod => mod\.RameshwaramDetail\)\)\nconst JagannathPuriDetail = nextDynamic\(\(\) => import\('\.\/JagannathPuriDetail'\)\.then\(mod => mod\.JagannathPuriDetail\)\)\nconst DevDeepawaliDetail = nextDynamic\(\(\) => import\('\.\/DevDeepawaliDetail'\)\.then\(mod => mod\.DevDeepawaliDetail\)\)\nconst DwarkaSomnathDetail = nextDynamic\(\(\) => import\('\.\/DwarkaSomnathDetail'\)\.then\(mod => mod\.DwarkaSomnathDetail\)\)\nconst UjjainOmkareshwarDetail = nextDynamic\(\(\) => import\('\.\/UjjainOmkareshwarDetail'\)\.then\(mod => mod\.UjjainOmkareshwarDetail\)\)\nconst KeralaDetail = nextDynamic\(\(\) => import\('\.\/KeralaDetail'\)\.then\(mod => mod\.KeralaDetail\)\)\nconst MaharashtraJyotirlingDetail = nextDynamic\(\(\) => import\('\.\/MaharashtraJyotirlingDetail'\)\.then\(mod => mod\.MaharashtraJyotirlingDetail\)\)\nconst CharDhamDetail = nextDynamic\(\(\) => import\('\.\/CharDhamDetail'\)\.then\(mod => mod\.CharDhamDetail\)\)\nconst GenericPackageDetail = nextDynamic\(\(\) => import\('\.\/GenericPackageDetail'\)\.then\(mod => mod\.GenericPackageDetail\)\)/g, `import { VaranasiPrayagrajAyodhyaDetail } from './VaranasiPrayagrajAyodhyaDetail'
import { RameshwaramDetail } from './RameshwaramDetail'
import { JagannathPuriDetail } from './JagannathPuriDetail'
import { DevDeepawaliDetail } from './DevDeepawaliDetail'
import { DwarkaSomnathDetail } from './DwarkaSomnathDetail'
import { UjjainOmkareshwarDetail } from './UjjainOmkareshwarDetail'
import { KeralaDetail } from './KeralaDetail'
import { MaharashtraJyotirlingDetail } from './MaharashtraJyotirlingDetail'
import { CharDhamDetail } from './CharDhamDetail'
import { GenericPackageDetail } from './GenericPackageDetail'`);
    } else {
        // For individual legacy pages
        pageContent = pageContent.replace(/import nextDynamic from 'next\/dynamic'/g, '');
        pageContent = pageContent.replace(/const UjjainOmkareshwarDetail = nextDynamic\(\(\) => import\('@\/app\/packages\/\[id\]\/UjjainOmkareshwarDetail'\)\.then\(mod => mod\.UjjainOmkareshwarDetail\)\)/g, `import { UjjainOmkareshwarDetail } from '@/app/packages/[id]/UjjainOmkareshwarDetail'`);
        pageContent = pageContent.replace(/const KeralaDetail = nextDynamic\(\(\) => import\('@\/app\/packages\/\[id\]\/KeralaDetail'\)\.then\(mod => mod\.KeralaDetail\)\)/g, `import { KeralaDetail } from '@/app/packages/[id]/KeralaDetail'`);
    }
    
    fs.writeFileSync(pagePath, pageContent);
  }
}

console.log('Script executed successfully!');

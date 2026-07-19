const fs = require('fs');

const dir = 'app/packages/[id]';
const files = fs.readdirSync(dir).filter(f => f.endsWith('Detail.tsx'));

for (const file of files) {
  const path = dir + '/' + file;
  let content = fs.readFileSync(path, 'utf8');
  content = content.replace(/@import url\(['"].*?googleapis.*?['"]\);/g, '');
  
  // Quick fix for LCP images
  // For CharDham:
  if (file === 'CharDhamDetail.tsx') {
    content = content.replace(/<section className="char-hero">\s*<div className="char-hero-content">/, `<section className="char-hero">\n        <div className="char-hero-bg">\n          <Image src="/CharDham.jpeg" alt="Char Dham" fill priority sizes="100vw" className="object-cover" />\n        </div>\n        <div className="char-hero-content">`);
    content = content.replace(/\.char-hero::before \{[^}]+\}/, `.char-hero-bg { position: absolute; inset: 0; animation: charZoom 12s ease-out forwards; z-index: 0; }`);
    if (!content.includes('import Image from "next/image"')) {
      content = content.replace('import Link from "next/link"', 'import Link from "next/link"\nimport Image from "next/image"');
    }
  }

  // For Varanasi:
  if (file === 'VaranasiPrayagrajAyodhyaDetail.tsx') {
    content = content.replace(/<div className="v-hero-img"><\/div>/, `<div className="v-hero-img"><Image src="/Ayomain.png" alt="Varanasi" fill priority sizes="100vw" className="object-cover" /></div>`);
    content = content.replace(/background: url\('\/Ayomain\.png'\) center\/cover no-repeat;/, ``);
    if (!content.includes('import Image from "next/image"')) {
      content = content.replace('import Link from "next/link"', 'import Link from "next/link"\nimport Image from "next/image"');
    }
  }

  // For DwarkaSomnath:
  if (file === 'DwarkaSomnathDetail.tsx') {
    content = content.replace(/<div className="dw-hero-img"><\/div>/, `<div className="dw-hero-img"><Image src="/DwMain.jpeg" alt="Dwarka Somnath" fill priority sizes="100vw" className="object-cover" /></div>`);
    content = content.replace(/background: url\('\/DwMain\.jpeg'\) center\/cover no-repeat;/, ``);
    if (!content.includes('import Image from "next/image"')) {
      content = content.replace('import Link from "next/link"', 'import Link from "next/link"\nimport Image from "next/image"');
    }
  }

  fs.writeFileSync(path, content);
}
console.log('Optimized LCP images and fonts');

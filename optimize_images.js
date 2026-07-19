const fs = require('fs');
const files = fs.readdirSync('app/packages/[id]').filter(f => f.endsWith('.tsx'));

files.forEach(f => {
  const p = 'app/packages/[id]/' + f;
  let code = fs.readFileSync(p, 'utf8');
  
  // Add quality={60} to Image tags that don't have it
  code = code.replace(/<Image (?![^>]*quality=)/g, '<Image quality={60} ');
  
  // Find hero divs (hero-img, v-hero-img, char-hero-bg, etc.)
  // e.g. <div className="hero-img"></div>
  const divRegex = /<div className="([^" \n]*hero[^" \n]*)"><\/div>/;
  const match = code.match(divRegex);
  
  if (match) {
    const className = match[1]; // e.g. hero-img
    // Find its CSS background
    // e.g. .hero-img { ... background: url('/foo.png') ... }
    const cssRegex = new RegExp('.' + className + '\\s*{[^}]*background:\\s*url\\([\'"\\s]*([^\)\'"]+)[\'"\\s]*\\)[^}]*}');
    const cssMatch = code.match(cssRegex);
    
    if (cssMatch) {
      const url = cssMatch[1];
      // Replace the div
      code = code.replace(
        match[0], 
        `<div className="${className}"><Image src="${url}" alt="Hero" fill priority sizes="100vw" quality={60} style={{objectFit: 'cover'}} /></div>`
      );
      // Remove the background property entirely from that class block
      code = code.replace(cssRegex, (m) => m.replace(/background:\s*url\([^)]+\)[^;]*;?/, ''));
      console.log('Fixed hero in ' + f + ' with URL ' + url);
    }
  }

  // Find CTA banners e.g. cta-banner::before
  // They are pseudo-elements, so we can't easily inject an Image into them.
  // Instead we can inject an Image into the section that has the cta-banner class.
  // We'll leave this for manual if necessary, or just rely on global compression, but the CTA images are large too!
  // Wait! Let's find CTA banners and extract them too!
  const ctaRegex = /\.([^ \n:]*cta-banner)::before\s*{[^}]*background:\s*url\([\'"\\s]*([^\)\'"]+)[\'"\\s]*\)[^}]*}/;
  const ctaMatch = code.match(ctaRegex);
  if (ctaMatch) {
    const className = ctaMatch[1];
    const url = ctaMatch[2];
    
    // Find <section className="...cta-banner...">
    const sectionRegex = new RegExp(`<section className="([^"]*${className}[^"]*)">`);
    const secMatch = code.match(sectionRegex);
    if (secMatch) {
      code = code.replace(
        secMatch[0],
        `${secMatch[0]}\n        <div style={{position: 'absolute', inset: 0, zIndex: 0}}><Image src="${url}" alt="Banner" fill sizes="100vw" quality={60} style={{objectFit: 'cover'}} /></div>`
      );
      // Remove the background property
      code = code.replace(ctaRegex, (m) => m.replace(/background:\s*url\([^)]+\)[^;]*;?/, ''));
      console.log('Fixed CTA in ' + f + ' with URL ' + url);
    }
  }

  fs.writeFileSync(p, code);
});
console.log('Done');

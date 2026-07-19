const fs = require('fs');
const files = fs.readdirSync('app/packages/[id]').filter(f => f.endsWith('.tsx'));

files.forEach(f => {
  const p = 'app/packages/[id]/' + f;
  let code = fs.readFileSync(p, 'utf8');

  // Match something-cta::before or something-cta-banner::before
  const ctaRegex = /\.([^ \n:]*cta[^ \n:]*)::before\s*{[^}]*background:\s*url\([\'"\\s]*([^\)\'"]+)[\'"\\s]*\)[^}]*}/;
  let ctaMatch = code.match(ctaRegex);
  while (ctaMatch) {
    const className = ctaMatch[1];
    const url = ctaMatch[2];
    
    // Find <section className=\"...className...\">
    // Some are <section className=\"char-cta\"> or <div className=\"char-cta\">
    const sectionRegex = new RegExp(`<[^>]*className="[^"]*${className}[^"]*"[^>]*>`);
    const secMatch = code.match(sectionRegex);
    if (secMatch) {
      code = code.replace(
        secMatch[0],
        `${secMatch[0]}\n        <div style={{position: 'absolute', inset: 0, zIndex: 0}}><Image src="${url}" alt="Banner" fill sizes="100vw" quality={60} style={{objectFit: 'cover'}} /></div>`
      );
      // Remove the background property
      code = code.replace(ctaRegex, (m) => m.replace(/background:\s*url\([^)]+\)[^;]*;?/, ''));
      console.log('Fixed CTA in ' + f + ' with URL ' + url);
    } else {
        console.log('Could not find DOM element for ' + className + ' in ' + f);
        break; // prevent infinite loop
    }
    ctaMatch = code.match(ctaRegex); // find if there are others
  }

  fs.writeFileSync(p, code);
});
console.log('Done CTA script');

const fs = require('fs');
const files = fs.readdirSync('app/packages/[id]').filter(f => f.endsWith('.tsx'));
files.forEach(f => {
  let p = 'app/packages/[id]/' + f;
  let code = fs.readFileSync(p, 'utf8');
  let regex = /src=['"]([^/h][^'"]+\.(?:png|jpe?g|webp|gif|svg))['"]/g;
  let matches;
  while ((matches = regex.exec(code)) !== null) {
    console.log(f + ': ' + matches[1]);
  }
});

// warm-cache.js
// Run after every deployment to pre-generate Vercel optimized images
// Usage:
//   node warm-cache.js                          → uses BASE_URL from env or default
//   BASE_URL=https://your-client.vercel.app node warm-cache.js
//   node warm-cache.js https://your-client.vercel.app

const https = require('https')

// Priority order: CLI arg → env var → default
const BASE_URL = (
  process.argv[2] ||
  process.env.BASE_URL ||
  process.env.VERCEL_URL && `https://${process.env.VERCEL_URL}` ||
  'https://margika-yatra-orpin.vercel.app'
).replace(/\/$/, '')

const IMAGES_TO_WARM = [
  // Hero — LCP element, warm all mobile/desktop sizes
  '/_next/image?url=%2FHomeMain.png&w=480&q=50',
  '/_next/image?url=%2FHomeMain.png&w=828&q=50',
  '/_next/image?url=%2FHomeMain.png&w=1080&q=50',
  '/_next/image?url=%2FHomeMain.png&w=1200&q=50',
  // Package card images
  '/_next/image?url=%2FCharDham.jpeg&w=640&q=55',
  '/_next/image?url=%2Fvr1.png&w=640&q=55',
  '/_next/image?url=%2FUjj.png&w=640&q=55',
  '/_next/image?url=%2FMaha.png&w=640&q=55',
  '/_next/image?url=%2Frameshwaram.jpg&w=640&q=55',
  '/_next/image?url=%2Fpuri.png&w=640&q=55',
  '/_next/image?url=%2FDD1.PNG&w=640&q=55',
  '/_next/image?url=%2FDwMain.jpeg&w=640&q=55',
  // Events carousel
  '/_next/image?url=%2FDD1.PNG&w=828&q=65',
]

function warmImage(path) {
  return new Promise((resolve) => {
    const url = BASE_URL + path
    const req = https.get(url, {
      headers: {
        'Accept': 'image/avif,image/webp,image/apng,*/*;q=0.8',
        'User-Agent': 'Mozilla/5.0 (Linux; Android 11; moto g power) AppleWebKit/537.36',
      },
    }, (res) => {
      res.resume()
      res.on('end', () => {
        const label = decodeURIComponent(path.split('url=')[1]?.split('&')[0] || path)
        const icon = res.statusCode === 200 ? '✅' : `⚠️  ${res.statusCode}`
        console.log(`${icon}  ${label}`)
        resolve()
      })
    })
    req.on('error', (err) => { console.log(`❌  ${path} — ${err.message}`); resolve() })
    req.setTimeout(20000, () => { req.destroy(); console.log(`⏱️  Timeout: ${path}`); resolve() })
  })
}

async function main() {
  console.log(`\n🚀  Warming Vercel image cache...\n📡  ${BASE_URL}\n`)
  for (const img of IMAGES_TO_WARM) {
    await warmImage(img)
    await new Promise(r => setTimeout(r, 400))
  }
  console.log('\n✅  Done! Run PageSpeed Insights now for accurate scores.\n')
}

main()

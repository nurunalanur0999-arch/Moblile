const fs = require('fs');
const path = require('path');
const root = __dirname;
const out = path.join(root, 'dist');
const publicFiles = [
  'index.html', 'about.html', 'services.html', 'projects.html',
  'process.html', 'service-areas.html', 'contact.html', 'success.html',
  'styles.css', 'site.js'
];
fs.rmSync(out, { recursive: true, force: true });
fs.mkdirSync(out, { recursive: true });
for (const file of publicFiles) {
  const src = path.join(root, file);
  if (!fs.existsSync(src)) throw new Error(`Required website file missing: ${file}`);
  fs.copyFileSync(src, path.join(out, file));
}
function copyAssets(from, to) {
  if (!fs.existsSync(from)) throw new Error('Required assets/ folder is missing.');
  fs.mkdirSync(to, { recursive: true });
  for (const entry of fs.readdirSync(from, { withFileTypes: true })) {
    const src = path.join(from, entry.name);
    const dest = path.join(to, entry.name);
    if (entry.isDirectory()) copyAssets(src, dest);
    else if (entry.isFile()) fs.copyFileSync(src, dest);
  }
}
copyAssets(path.join(root, 'assets'), path.join(out, 'assets'));
for (const file of ['index.html', 'contact.html']) {
  const html = fs.readFileSync(path.join(out, file), 'utf8');
  if (!html.includes('data-netlify="true"')) throw new Error(`Netlify form markup missing in ${file}`);
  if (!html.includes('enctype="multipart/form-data"')) throw new Error(`File upload encoding missing in ${file}`);
}
console.log(`Build complete: ${publicFiles.length} public files and assets copied to dist/.`);

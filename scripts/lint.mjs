import { readdir, readFile, stat } from 'node:fs/promises';
import { dirname, extname, resolve } from 'node:path';

const sourceRoot = resolve('src');
const files = [];

async function walk(directory) {
  for (const entry of await readdir(directory)) {
    const path = resolve(directory, entry);
    const info = await stat(path);
    if (info.isDirectory()) await walk(path);
    else if (['.js', '.jsx'].includes(extname(path))) files.push(path);
  }
}

await walk(sourceRoot);
const errors = [];

for (const file of files) {
  const source = await readFile(file, 'utf8');
  if (/\balert\s*\(/.test(source)) errors.push(`${file}: avoid alert(); provide an in-page interaction.`);
  if (/href=["']javascript:/i.test(source)) errors.push(`${file}: javascript: links are not allowed.`);

  const imports = [...source.matchAll(/from\s+["'](\.[^"']+)["']/g)];
  for (const match of imports) {
    const base = resolve(dirname(file), match[1]);
    const candidates = [base, `${base}.js`, `${base}.jsx`, resolve(base, 'index.js'), resolve(base, 'index.jsx')];
    let found = false;
    for (const candidate of candidates) {
      try {
        if ((await stat(candidate)).isFile()) found = true;
      } catch {}
    }
    if (!found) errors.push(`${file}: unresolved import ${match[1]}`);
  }
}

if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}

console.log(`Source checks passed (${files.length} files).`);

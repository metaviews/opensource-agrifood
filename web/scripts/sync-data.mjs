// Keeps the site's build-time data honest: the nodes page renders from this
// copy and the raw file is published at /directory-data.json. The source of
// truth is the repo root's directory-data.json; this script is run by
// `npm run build` (prebuild) and the copy is committed so a build without
// the script still works.
import { copyFileSync, existsSync, mkdirSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const webDir = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const source = path.join(webDir, '..', 'directory-data.json');
const targets = [path.join(webDir, 'public', 'directory-data.json')];

if (!existsSync(source)) {
  console.error(`sync-data: source missing: ${source}`);
  process.exit(1);
}
for (const target of targets) {
  mkdirSync(path.dirname(target), { recursive: true });
  copyFileSync(source, target);
  console.log(`sync-data: ${path.relative(webDir, source)} -> ${path.relative(webDir, target)}`);
}

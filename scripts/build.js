import { cpSync, mkdirSync, rmSync, writeFileSync } from 'node:fs';

rmSync('dist', { recursive: true, force: true });
mkdirSync('dist');
cpSync('src', 'dist/src', { recursive: true });
cpSync('package.json', 'dist/package.json');
writeFileSync('dist/BUILD_INFO.txt', `Built with Node ${process.version}\n`);
console.log('Build complete: dist/');

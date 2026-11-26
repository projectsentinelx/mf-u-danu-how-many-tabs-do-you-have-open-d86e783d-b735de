import { writeFileSync, mkdirSync, existsSync } from 'node:fs';

const count = 73;

if (!existsSync('/output')) {
  mkdirSync('./output', { recursive: true });
}

writeFileSync(existsSync('/output') ? '/output/entry.txt' : './output/entry.txt', String(count));
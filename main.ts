import { writeFileSync, mkdirSync } from 'node:fs';

const count = 47;

try {
  mkdirSync('/output', { recursive: true });
} catch {
  mkdirSync('./output', { recursive: true });
}

writeFileSync('/output/entry.txt', String(count));
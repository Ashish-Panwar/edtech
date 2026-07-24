// fix-transactions.js
const fs = require('fs');

const files = [
  'backend/src/courses/courses.service.ts',
  'backend/src/faculty/faculty.service.ts',
  'backend/src/hero-slides/hero-slides.service.ts',
  'backend/src/leads/leads.service.ts',
  'backend/src/stats/stats.service.ts',
  'backend/src/testimonials/testimonials.service.ts',
];

const marker = '$transaction([';

for (const file of files) {
  let src = fs.readFileSync(file, 'utf8');
  const idx = src.indexOf(marker);
  if (idx === -1) {
    console.log(`SKIP (already fixed or not found): ${file}`);
    continue;
  }

  // Find the matching closing bracket for the array literal
  let depth = 1;
  let i = idx + marker.length - 1; // position of the opening '['
  while (depth > 0 && i < src.length - 1) {
    i++;
    if (src[i] === '[') depth++;
    if (src[i] === ']') depth--;
  }
  // i now points at the matching ']'
  const before = src.slice(0, i + 1);
  const after = src.slice(i + 1);

  const optionsBlock = `,\n      {\n        maxWait: 10000,\n        timeout: 20000,\n      },`;

  const updated = before + optionsBlock + after;
  fs.writeFileSync(file, updated, 'utf8');
  console.log(`FIXED: ${file}`);
}
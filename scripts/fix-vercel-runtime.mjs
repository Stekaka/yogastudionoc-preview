#!/usr/bin/env node
/**
 * Post-build: replace nodejs18.x with nodejs20.x in Vercel function configs.
 * Required until @astrojs/vercel defaults to a supported Node runtime (Node 18
 * is deprecated on Vercel as of 2025-09-01).
 */

import fs from 'fs';
import path from 'path';

const outDir = path.join(process.cwd(), '.vercel', 'output', 'functions');
if (!fs.existsSync(outDir)) {
  process.exit(0);
}

let updated = 0;
for (const name of fs.readdirSync(outDir)) {
  if (!name.endsWith('.func')) continue;
  const configPath = path.join(outDir, name, '.vc-config.json');
  if (!fs.existsSync(configPath)) continue;
  let raw = fs.readFileSync(configPath, 'utf8');
  if (!raw.includes('nodejs18.x')) continue;
  raw = raw.replace(/nodejs18\.x/g, 'nodejs20.x');
  fs.writeFileSync(configPath, raw, 'utf8');
  updated++;
}

if (updated > 0) {
  console.log(`[fix-vercel-runtime] Updated ${updated} function(s) to nodejs20.x`);
}

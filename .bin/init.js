#!/usr/bin/env node

const fs = require('fs-extra');
const path = require('path');
const { exec } = require("child_process");

const srcd = path.join(path.dirname(__filename), '..');
const cwd = process.cwd();

console.log('Copying file...');

fs.copySync(`${srcd}/.storybook`, `${cwd}/.storybook`);
fs.copySync(`${srcd}/src`, `${cwd}/src`);
fs.copySync(`${srcd}/webpack.config.js`, `${cwd}/webpack.config.js`);
fs.copySync(`${srcd}/tsconfig.json`, `${cwd}/tsconfig.json`);
fs.copySync(`${srcd}/tsconfig.eslint.json`, `${cwd}/tsconfig.eslint.json`);
fs.copySync(`${srcd}/tailwind.config.js`, `${cwd}/tailwind.config.js`);
fs.copySync(`${srcd}/postcss.config.js`, `${cwd}/postcss.config.js`);
fs.copySync(`${srcd}/package.tpl.json`, `${cwd}/package.json`);

exec('yarn', () => {
  console.log('✅ Achieved with success!');
});
  
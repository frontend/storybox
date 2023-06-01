#!/usr/bin/env node

const fs = require('fs-extra');
const path = require('path');
const { exec } = require("child_process");

const srcd = path.join(path.dirname(__filename), '..');
const cwd = process.cwd();

console.log('Copying file...');

fs.copySync(`${srcd}/.storybook`, `${cwd}/test-storybox-npm/.storybook`);
fs.copySync(`${srcd}/src`, `${cwd}/test-storybox-npm/src`);
fs.copySync(`${srcd}/rollup.config.js`, `${cwd}/test-storybox-npm/rollup.config.js`);
fs.copySync(`${srcd}/tsconfig.json`, `${cwd}/test-storybox-npm/tsconfig.json`);
fs.copySync(`${srcd}/tsconfig.eslint.json`, `${cwd}/test-storybox-npm/tsconfig.eslint.json`);
fs.copySync(`${srcd}/tailwind.config.js`, `${cwd}/test-storybox-npm/tailwind.config.js`);
fs.copySync(`${srcd}/postcss.config.js`, `${cwd}/test-storybox-npm/postcss.config.js`);
fs.copySync(`${srcd}/package.tpl.json`, `${cwd}/test-storybox-npm/package.json`);

fs.writeFileSync(`${cwd}/test-storybox-npm/.gitignore`, `
# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# production
/build
/dist
/storybook-static

# misc
.DS_Store
.env.local
.env.development.local
.env.test.local
.env.production.local

npm-debug.log*
yarn-debug.log*
yarn-error.log*
`);

exec('yarn', () => {
  console.log('✅ Achieved with success!');
});
  
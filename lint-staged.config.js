module.exports = {
  '*': ['echo'],
  'package.json': ['prettier --write'],
  '*.js': ['npx eslint --fix', 'prettier --write'],
  '*.css': ['stylelint --fix', 'prettier --write'],
  // '*.md': ['markdownlint', 'prettier --write'],
};
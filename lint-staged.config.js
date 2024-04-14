module.exports = {
  'src/**': ['echo'],
  'package.json': ['prettier --write'],
  'src/**.js': ['npx eslint --fix', 'prettier --write'],
  '*.css': ['stylelint --fix', 'prettier --write'],
  // '*.md': ['markdownlint', 'prettier --write'],
};
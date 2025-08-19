const { generateTemplateFiles } = require('generate-template-files');

generateTemplateFiles([
  {
    option: 'Component as Feature',
    defaultCase: '(pascalCase)',
    entry: {
      folderPath: './tools/templates/component',
    },
    stringReplacers: ['__name__'],
    output: {
      path: './src/components/features/__name__(pascalCase)',
    },
  },
  {
    option: 'Component as Template',
    defaultCase: '(pascalCase)',
    entry: {
      folderPath: './tools/templates/component',
    },
    stringReplacers: ['__name__'],
    output: {
      path: './src/components/templates/__name__(pascalCase)',
    },
  },
  {
    option: 'Component as UI',
    defaultCase: '(pascalCase)',
    entry: {
      folderPath: './tools/templates/component',
    },
    stringReplacers: ['__name__'],
    output: {
      path: './src/components/ui/__name__(pascalCase)',
    },
  },
  {
    option: 'API Basic Route',
    defaultCase: '(pascalCase)',
    entry: {
      folderPath: './tools/templates/api',
    },
    stringReplacers: ['__route__'],
    output: {
      path: './src/app/api/__route__(kebabCase)',
    },
  },
  {
    option: 'Page Basic Route',
    defaultCase: '(pascalCase)',
    entry: {
      folderPath: './tools/templates/page',
    },
    stringReplacers: ['__name__', '__route__'],
    output: {
      path: './src/app/__route__(kebabCase)',
    },
  },
]);

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
      path: './src/components/templates/__name__(pascalCase)',
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
]);

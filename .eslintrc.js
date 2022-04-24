module.exports = {
  root: true,
  extends: ['airbnb'],
  rules: {
    'react/jsx-filename-extension': 'off',
    'import/no-unresolved': [2, { ignore: ['^(all|part):'] }],
    // You can override any rules you want
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@components', './src/components'],
          ['@shared', './src/components/shared'],
          ['@styles', './src/styles'],
          ['@assets', './src/assets'],
        ],
        extensions: ['.ts', '.js', '.jsx', '.json'],
      },
    },
  },
};

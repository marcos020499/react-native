module.exports = {
  'env': {
    'es6': true,
    'node': true,
  },
  'extends': [
    'google',
  ],
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly',
  },
  'parserOptions': {
    'ecmaVersion': 2018,
    'sourceType': 'module',
  },
  'rules': {
    'linebreak-style': 0,
    'object-curly-spacing': ['error', 'always'],
    'new-cap': 0,
    'max-len': 0,
  },
};
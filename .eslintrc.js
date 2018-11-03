module.exports = {
  env: {
    es6: true,
    node: true
  },
  globals: {
    expect: true,
    it: true,
    describe: true
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true
    },
    sourceType: 'module'
  },
  plugins: ['react', 'prettier'],
  rules: {
    'prettier/prettier': ['error']
  },
  extends: ['prettier', 'prettier/react']
};

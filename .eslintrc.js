module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    '@antfu',
  ],
  rules: {
    'import/order': ['error', {
      'alphabetize': {
        order: 'asc',
      },
      'newlines-between': 'always',
    }],
  },
}

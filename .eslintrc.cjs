module.exports = {
  env: {
    browser: true, // Browser global variables like `window` etc.
    commonjs: true, // CommonJS global variables and CommonJS scoping.Allows require, exports and module.
    es6: true, // Enable all ECMAScript 6 features except for modules.
    jest: true, // Jest global variables like `it` etc.
    node: true, // Defines things like process.env when generating through node
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended', // uses typescript-specific linting rules
    // 'plugin:import/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:jsx-a11y/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jest/recommended',
    // ! TODO: Ryan B - Enable this for consistent testing specs
    // 'plugin:testing-library/react',
    'prettier', // disables react-specific linting rules that conflict with prettier
    'plugin:prettier/recommended', // uses react-specific linting rules
  ],
  overrides: [
    {
      files: ['**/*.stories.*'],
      rules: {
        'import/no-anonymous-default-export': 'off',
      },
    },
    {
      files: ['**/index.ts'],
      rules: {
        'sort-exports/sort-exports': [
          'warn',
          { sortDir: 'asc', ignoreCase: false, sortExportKindFirst: 'none' },
        ],
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
  },
  plugins: [
    'import', // eslint-plugin-import plugin. https://www.npmjs.com/package/eslint-plugin-import
    'sort-exports', // eslint-plugin-sort-exports plugin. https://www.npmjs.com/package/eslint-plugin-sort-exports
    'unused-imports',
  ],
  root: true, // For configuration cascading.
  rules: {
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],

    'comma-dangle': ['warn', 'always-multiline'],
    'eol-last': 'error',
    // import plugins
    'import/newline-after-import': ['error', { count: 1 }],
    'import/no-unresolved': 'error',
    'import/namespace': 'error',
    'import/default': 'error',
    'import/export': 'error',
    'import/no-duplicates': 'warn',
    'import/order': [
      'error',
      {
        groups: [
          'external', // all libraries imports - configured in 'import/external-module-folders'
          'internal', // angular imports - configured in 'import/internal-regex'
          'builtin', // internal-library imports
          ['parent', 'sibling', 'index'], // relative paths
        ],
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
          },
          {
            pattern: 'Library',
            group: 'builtin',
          },
          {
            pattern: 'Pages',
            group: 'builtin',
          },
        ],
        pathGroupsExcludedImportTypes: ['type', 'object'],
        alphabetize: {
          order: 'asc',
        },
      },
    ],

    'no-console': 'warn',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'warn', // or "error"
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
      },
    ],
    'object-curly-spacing': ['warn', 'always'],
    'prettier/prettier': ['error', { singleQuote: true }],
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    ],
    'react/prop-types': 'off',
    'react/display-name': 'off',
    semi: 'warn',
    'testing-library/prefer-screen-queries': 'off',
    'sort-imports': [
      'warn',
      {
        ignoreCase: false,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
      },
    ],
    'no-restricted-imports': [
      'error',
      {
        paths: [
          {
            name: 'lodash',
            message: 'Import [module] from lodash/[module] instead',
          },
        ],
        patterns: ['!lodash/*'],
      },
    ],
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/external-module-folders': ['node_modules'],
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
    react: {
      version: 'detect', // Detect react version
    },
  },
};

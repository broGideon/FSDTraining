module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
    node: true, // Для серверной части Next.js
  },
  extends: [
    'eslint:recommended',
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended', // Для реактовских проверок
    'plugin:prettier/recommended', // Использование Prettier для стилистических проверок
  ],
  ignorePatterns: ['dist', 'node_modules', '.eslintrc.js'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: [
    'react-refresh',
    'prettier', // Для Prettier интеграции
    'react', // Плагин для React
  ],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'react/prop-types': 'off',
    '@next/next/no-html-link-for-pages': 'off',
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/jsx-uses-react': 'off', // С React 17 не требуется импортировать React для JSX
    'react/react-in-jsx-scope': 'off', // С React 17 не требуется
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        semi: false,
        trailingComma: 'all',
      },
    ],
    // Общие правила синтаксиса для улучшения кода
    'no-console': 'error', // Предупреждения при использовании console.log
    'no-debugger': 'warn', // Предупреждения при использовании debugger
    'no-unused-expressions': 'warn', // Запрещает использование выражений, не дающих результата
    eqeqeq: 'warn', // Рекомендуется использовать строгое сравнение (===)
    'no-var': 'warn', // Рекомендуется использовать let или const вместо var
    'prefer-const': 'warn', // Рекомендуется использовать const, когда переменная не изменяется
  },
}

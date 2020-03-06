module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
    project: './tsconfig.json'
  },
  plugins: [
    "@typescript-eslint",
    "@typescript-eslint/tslint",
  ],
  rules: {
    "eqeqeq": "error",
  },
  overrides: [
    {
      files: ["*.ts"],
      rules: {
        '@typescript-eslint/tslint/config': [
          'error', {
            rules: {
              "encoding": true,
              'completed-docs': true,
            },
            rulesDirectory: [
              "./node_modules/tslint-microsoft-contrib"
            ]
          }
        ],
      }
    },
    {
      files: ['**/__tests__/**/*.ts'],
      rules: {
        '@typescript-eslint/tslint/config': [
          'error',
          {
            rules: {
              "encoding": true,
              'completed-docs': false
            },
            rulesDirectory: [
              "./node_modules/tslint-microsoft-contrib"
            ]
          }
        ],
      }
    }
  ]
};

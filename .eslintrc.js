module.exports = {
  env: {
    browser: false,
    es6: true,
    node: true
  },
  extends: [
    "plugin:shopify/esnext",
    "plugin:shopify/lodash",
    "plugin:shopify/react",
    "plugin:shopify/mocha",
    "plugin:shopify/prettier"
  ],
  parserOptions: {
    ecmaVersion: 2016,
    sourceType: "module"
  },
  rules: {
    "linebreak-style": ["error", "unix"],
    semi: ["error", "always"],
    "no-console": ["warn"],
    "babel/object-curly-spacing": "off"
  },
  overrides: [
    {
      // Database models often need to use snake_case for column names,
      // so we need to disable the camelCase and PascalCase rules for
      // linting those scripts.
      files: ["src/db/**/*"],
      rules: {
        camelcase: "off",
        "shopify/typescript/prefer-pascal-case-enums": "off"
      }
    },
    {
      // Config files should be able to reference process.env directly -
      // other modules would normally have configuration passed into them.
      files: [".eslintrc.js", "webpack.server.js", "setupProxy.js"],
      env: {
        node: true
      },
      rules: {
        "no-process-env": "off"
      }
    }
  ]
};

module.exports = {
  env: {
    // Set the default environment to `node` - we will override this
    // for the scripts loaded into the browser in the `overrides` section
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
    "babel/object-curly-spacing": "off",
    "linebreak-style": ["error", "unix"],
    "lodash/matches-shorthand": ["on", "never"],
    "no-console": "warn",
    "no-warning-comments": "warn",
    // This interferes with Prettier
    "react/jsx-child-element-spacing": "off",
    // Allow quotes (' and ")
    "react/no-unescaped-entities": ["error", { forbid: [">", "}"] }],
    semi: ["error", "always"],
    // This rule appears to be triggered intermittently between local
    // development and CI environments, so easiest to switch it off for now
    "shopify/strict-component-boundaries": "off"
  },
  overrides: [
    {
      // Configure the default environment for browser scripts
      files: ["src/scripts/**/*", "src/index.js"],
      env: {
        browser: true,
        commonjs: true,
        node: false
      }
    },
    {
      // Configure the Jest environment for tests
      files: ["src/**/*.test.js"],
      env: {
        jest: true
      }
    },
    {
      // Top-level and config files should be able to reference process.env
      // directly - other modules would normally have configuration passed
      // into them.
      files: [
        ".eslintrc.js",
        "webpack.server.js",
        "src/lambda/**/*",
        "src/index.js",
        "src/scripts/infrastructure/documentTitle.js",
        "src/scripts/store/init.js",
        "setupProxy.js"
      ],
      globals: {
        process: false
      },
      rules: {
        "no-console": "off",
        "no-process-env": "off"
      }
    }
  ],
  settings: {
    react: {
      version: "16.0"
    }
  }
};

const BABEL_PRESET_ENV_BROWSER = {
    /* Webpack must parse the ES2015 module syntax in order to perform tree shaking,
     * so Babel must not transform it. */
    modules: false,

    /* Transform the '@babel/polyfill' into individual polyfills.
     * See: https://git.io/vd0Cq#usebuiltins-entry */
    useBuiltIns: 'entry',
};

const BABEL_CONFIG_BROWSER = {
    plugins: [
        'lodash',

        /* The following plugins are not included automatically by the
         * babel-preset-env preset because they are not part of a current
         * ECMAScript spec (they may be included in future, but must be referenced
         * separately for now). */

        /* See: https://webpack.js.org/guides/code-splitting-async/ */
        '@babel/syntax-dynamic-import',

        /* Required for { ...props } syntax. */
        ['@babel/proposal-object-rest-spread', { useBuiltIns: true }],

        '@babel/plugin-proposal-class-properties',

        'react-hot-loader/babel',
    ],

    presets: [
        /* This is the main Babel configuration - using the babel-preset-env preset
         * automatically configures Babel with most of the required plugins, automatically
         * targeting browsers specified by the browserslist config in package.json. */
        ['@babel/env', BABEL_PRESET_ENV_BROWSER],

        /* Transpiles JSX syntax into React function calls. */
        '@babel/react',
    ],
};

const BABEL_PRESET_ENV_NODE = {
    /* Prevent browserslist config from being automatically merged in as targets. */
    ignoreBrowserslistConfig: true,

    /* If bundling using Webpack (where the BABEL_ENV is explicitly set to 'node'),
     * then Babel should not transform ES2015 modules. In all other cases, Babel needs to
     * transpile ES2015 modules, e.g. to run tests using Jest and to run seed scripts with
     * `babel-register`. */
    modules: process.env.BABEL_ENV !== 'node' ? 'commonjs' : false,

    /* Target only the latest version of Node.js. This should effectively mean that no
     * plugins are included by default, except for the ES2015 modules transform. */
    targets: { node: '8.3.0' },

    /* Polyfills are not needed in Node.js. */
    useBuiltIns: false,
};

const BABEL_CONFIG_NODE = {
    presets: [
        ['@babel/env', BABEL_PRESET_ENV_NODE],
        '@babel/react',
    ],
    plugins: [
        /* See: https://facebook.github.io/jest/docs/webpack.html */
        'dynamic-import-node',

        ['@babel/proposal-object-rest-spread', { useBuiltIns: true }],

        '@babel/plugin-proposal-class-properties',
    ],
};

module.exports = process.env.BABEL_ENV === 'browser' ?
    BABEL_CONFIG_BROWSER : BABEL_CONFIG_NODE;

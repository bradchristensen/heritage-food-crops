const BABEL_PRESET_ENV_BROWSER = {
    /* This plugin is currently broken and must be excluded, otherwise the script crashes
     * and throws "Maximum call stack size exceeded". */
    exclude: ['transform-es2015-typeof-symbol'],

    /* Webpack must parse the ES2015 module syntax in order to perform tree shaking,
     * so Babel must not transform it. */
    modules: false,

    /* Don't include inline polyfills - these are provided by babel-polyfill. */
    useBuiltIns: false,
};

const BABEL_CONFIG_BROWSER = {
    /* The following plugins are not included automatically by the
     * babel-preset-env preset because they are not part of a current
     * ECMAScript spec (they may be included in future, but must be referenced
     * separately for now). */
    plugins: [
        'lodash',

        /* Required for { ...props } syntax. */
        'transform-object-rest-spread',
    ],

    presets: [
        /* This is the main Babel configuration - using the babel-preset-env preset
         * automatically configures Babel with most of the required plugins, automatically
         * targeting browsers specified by the browserslist config in package.json. */
        ['env', BABEL_PRESET_ENV_BROWSER],

        /* Transpiles JSX syntax into React function calls. */
        'react',
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
        ['env', BABEL_PRESET_ENV_NODE],
        'react',
    ],
    plugins: [
        'transform-object-rest-spread',
    ],
};

module.exports = process.env.BABEL_ENV === 'browser' ?
    BABEL_CONFIG_BROWSER : BABEL_CONFIG_NODE;

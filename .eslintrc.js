const restrictedGlobals = require('eslint-restricted-globals');

module.exports = {
    env: {
        node: true,
    },
    extends: 'airbnb',
    parser: 'babel-eslint',
    parserOptions: {
        ecmaFeatures: {
            experimentalObjectRestSpread: true,
        },
    },
    plugins: ['babel'],
    rules: {
        'babel/no-invalid-this': [2],
        'babel/semi': [2, 'always'],
        'import/no-extraneous-dependencies': [2, {
            devDependencies: [
                '**/*/test/**/*.js',
                '**/*/tasks/**/*.js',
                '**/*/gulpfile.js',
                '**/*/*.dev.js*',
                '**/*/DevTools.jsx',
                '.eslintrc.js',
            ],
        }],
        indent: [2, 4],
        'jsx-a11y/anchor-is-valid': ['error', {
            components: ['Link'],
            specialLink: ['to'],
            aspects: ['noHref', 'invalidHref', 'preferButton'],
        }],
        'max-len': [2, {
            code: 100,
            ignorePattern: '=(".*"|\'.*\'|{.*})$',
            ignoreStrings: true,
            ignoreTemplateLiterals: true,
        }],
        'no-param-reassign': [2, { props: false }],
        'no-restricted-globals': [2, 'URL'].concat(restrictedGlobals),
        'no-restricted-syntax': [
            'error',
            {
                selector: 'ForInStatement',
                message: 'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
            },
            {
                selector: 'LabeledStatement',
                message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
            },
            {
                selector: 'WithStatement',
                message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
            },
        ],
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        'react/no-unescaped-entities': [0],
    },
};

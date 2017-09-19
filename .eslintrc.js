const restrictedGlobals = require('eslint-restricted-globals');

module.exports = {
    env: {
        node: true,
    },
    extends: 'airbnb',
    parserOptions: {
        ecmaFeatures: {
            experimentalObjectRestSpread: true,
        },
    },
    rules: {
        'import/no-extraneous-dependencies': [2, {
            devDependencies: [
                '**/*/test/**/*.js',
                '**/*/tasks/**/*.js',
                '**/*/gulpfile.js',
                '**/*/*.dev.js*',
                '**/*/DevTools.js',
                '.eslintrc.js',
            ],
        }],
        indent: [2, 4],
        'jsx-a11y/anchor-has-content': [1],
        'jsx-a11y/href-no-hash': [1],
        'jsx-quotes': [2, 'prefer-single'],
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
        'react/jsx-filename-extension': [0],
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        'react/no-unescaped-entities': [0],
    },
};

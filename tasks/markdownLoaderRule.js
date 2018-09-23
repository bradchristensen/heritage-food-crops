const anchor = require('markdown-it-anchor');
const tableOfContents = require('markdown-it-table-of-contents');

// const renderer = new marked.Renderer();

// renderer.hr = () => '</div><div class="box">';

module.exports = {
    test: /\.md/,
    use: [
        { loader: 'html-loader' },
        {
            loader: './tasks/markdownLoader',
            options: {
                preset: 'default',
                typographer: true,

                use: [anchor, tableOfContents],

                // Override defaults set by markdown-it-loader
                highlight(/* str, lang */) { return ''; },
            },
        },
    ],
};

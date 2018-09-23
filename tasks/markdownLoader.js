const markdown = require('markdown-it');
const loaderUtils = require('loader-utils');

module.exports = function MarkdownLoader(source) {
    this.cacheable();

    const opts = loaderUtils.getOptions(this);

    const plugins = opts.use;
    delete opts.use;

    const parser = markdown(opts.preset, opts);

    if (plugins) {
        plugins.forEach((plugin) => {
            if (Array.isArray(plugin)) {
                // Allow array of options to be passed.
                parser.use(...plugin);
            } else {
                parser.use(plugin);
            }
        });
    }

    return parser.render(source);
};

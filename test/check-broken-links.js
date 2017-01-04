const blc = require('broken-link-checker');

// Start up the server
require('../index');

const errors = [];

const siteChecker = new blc.SiteChecker({}, {
    link(result) {
        if (result.broken) {
            errors.push(result);
        }
    },
    end() {
        if (errors.length) {
            console.error(`\nFound ${errors.length} ${errors.length === 1 ? 'error' : 'errors'}:`);
            errors.forEach((err) => {
                console.error(`--${err.brokenReason}-- ${err.url.original}`);
            });
            process.exit(1);
        } else {
            console.log('All links function correctly.');
            process.exit(0);
        }
    },
});

siteChecker.enqueue('http://localhost:3000');

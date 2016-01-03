import express from 'express';

import config from 'app/config';
import expressConfig from 'app/plumbing/express';

var app = express();
app.config = config;

expressConfig(app, express);

app.listen(app.get('port'), function () {
    console.log('\n✔ Express server listening on port %d in %s mode',
            app.get('port'), app.get('env'));
});

import express from 'express';
import config from '../config';
import expressConfig from './express';

const app = express();
app.config = config;

expressConfig(app, express);

app.listen(app.get('port'), () => {
    console.log('\n✔ Express server listening on port %d in %s mode',
        app.get('port'), app.get('env'));
});

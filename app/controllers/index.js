import _ from 'lodash';
import config from 'app/config';
import routes from 'static/scripts/infrastructure/routes';
import Router from 'react-router';
import React from 'react';

export default {
    get (req, res) {
        var account = req.session.account ? _.cloneDeep(req.session.account) : null;
        if (account) {
            delete account.passwordHash;
            delete account.activationCode;
        }

        var newConfig = _.cloneDeep(config);
        delete newConfig.mysql;
        delete newConfig.testMysql;
        delete newConfig.server;

        Router.run(routes, req.url, Root => {
            res.render('index', {
                title: config.title,
                year: new Date().getFullYear(),
                config: _.assign(newConfig, {
                    userIsLoggedIn: !!account,
                    userIsAdmin: account && !!account.privileges,
                    account
                }),
                content: React.renderToStaticMarkup(<Root />)
            });
        });
    }
};

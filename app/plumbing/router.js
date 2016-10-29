import { Router as routerConstructor } from 'express';
import _ from 'lodash';

import index from '../controllers/index';
import contact from '../controllers/api/contact';

const views = {
    '': ['', 'index'],
    'montys-surprise': ['montys-surprise', 'apples', 'heirloom-apples'],
    'heirloom-tomatoes': ['heirloom-tomatoes', 'tomatoes'],
    'heirloom-beans': ['heirloom-beans', 'beans', 'heirloom-beans/bean-import-project', 'heirloom-beans/climbing-beans'],
    'heirloom-tomatoes/past-research': ['heirloom-tomatoes/past-research'],
    'plums-peaches': [
        'peaches',
        'plums',
        'plums-peaches',
        'peaches-plums',
        'plums-and-peaches',
        'peaches-and-plums',
        'heirloom-peaches',
        'heirloom-plums',
        'heirloom-plums-peaches',
        'heirloom-peaches-plums',
    ],
    'huntingtons-disease': ['huntingtons', 'huntingtons-disease'],
    'ancient-wheat': ['wheat', 'ancient-wheat'],
    'about-the-trust': ['about', 'about-us', 'about-the-trust'],
    'contact-us': ['contact', 'contact-us'],
    links: ['links'],
};

const api = {
    contact,
};

const router = routerConstructor({ strict: true });

_.forEach(views, (aliases, route) => {
    router.get(`/${route}`, index.get);
    router.get(`/${route}/`, (req, res) => res.redirect(`/${route}`));
    _.forEach(aliases, (alias) => {
        if (alias !== route) {
            router.get(`/${alias}`, (req, res) => res.redirect(`/${route}`));
            router.get(`/${alias}/`, (req, res) => res.redirect(`/${route}`));
        }
    });
});

_.forEach(api, (controller, route) => {
    _.forEach(controller, (action, method) => {
        if (method in router) {
            router[method](`/api/${route}`, action);
        }
    });
});

export default router;

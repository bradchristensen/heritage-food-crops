import React from 'react';
import { Route, Switch } from 'react-router-dom';
import withTracker from './withTracker';

import Index from '../views/index';
import PageNotFound from '../views/page-not-found';
import MontysSurprise from '../views/montys-surprise';
import HeirloomTomatoes from '../views/heirloom-tomatoes';
import HeirloomTomatoesPastResearch from '../views/heirloom-tomatoes/past-research';
import HeirloomBeans from '../views/heirloom-beans';
import PlumsPeaches from '../views/plums-peaches';
import HuntingtonsDisease from '../views/huntingtons-disease';
import AncientWheat from '../views/ancient-wheat';
import Publications from '../views/publications';
import AboutTheTrust from '../views/about-the-trust';
import ContactUs from '../views/contact-us';
import Links from '../views/links';

const routes = (
    <Switch>
        <Route exact path='/' component={withTracker(Index)} />

        <Route
            path='/montys-surprise'
            component={withTracker(MontysSurprise)}
        />
        <Route
            path='/heirloom-tomatoes'
            component={withTracker(HeirloomTomatoes)}
        />
        <Route
            path='/heirloom-tomatoes/past-research'
            component={withTracker(HeirloomTomatoesPastResearch)}
        />
        <Route
            path='/heirloom-beans'
            component={withTracker(HeirloomBeans)}
        />
        <Route
            path='/plums-peaches'
            component={withTracker(PlumsPeaches)}
        />
        <Route
            path='/huntingtons-disease'
            component={withTracker(HuntingtonsDisease)}
        />
        <Route
            path='/ancient-wheat'
            component={withTracker(AncientWheat)}
        />

        <Route path='/publications' component={withTracker(Publications)} />

        <Route path='/about-the-trust' component={withTracker(AboutTheTrust)} />
        <Route path='/contact-us' component={withTracker(ContactUs)} />
        <Route path='/links' component={withTracker(Links)} />

        <Route component={withTracker(PageNotFound)} />
    </Switch>
);

export default routes;

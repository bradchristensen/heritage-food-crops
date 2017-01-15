import React from 'react';
import { Route, IndexRoute } from 'react-router';

// Routes
import App from '../views/app';
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

// declare our routes and their hierarchy
const routes = (
    <Route path='/' component={App}>
        <IndexRoute component={Index} />

        <Route path='montys-surprise' component={MontysSurprise} />
        <Route path='heirloom-tomatoes' component={HeirloomTomatoes} />
        <Route path='heirloom-tomatoes/past-research' component={HeirloomTomatoesPastResearch} />
        <Route path='heirloom-beans' component={HeirloomBeans} />
        <Route path='plums-peaches' component={PlumsPeaches} />
        <Route path='huntingtons-disease' component={HuntingtonsDisease} />
        <Route path='ancient-wheat' component={AncientWheat} />

        <Route path='publications' component={Publications} />

        <Route path='about-the-trust' component={AboutTheTrust} />
        <Route path='contact-us' component={ContactUs} />
        <Route path='links' component={Links} />

        <Route path='*' component={PageNotFound} />
    </Route>
);

export default routes;

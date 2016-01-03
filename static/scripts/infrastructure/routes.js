import React from 'react';
import { Route, DefaultRoute } from 'react-router';

// Routes
import App from 'views/app';
import Index from 'views/index';
import MontysSurprise from 'views/montys-surprise';
import HeirloomTomatoes from 'views/heirloom-tomatoes';

/*
import HeirloomBeans from 'views/heirloom-beans';
import PlumsPeaches from 'views/plums-peaches';
import HuntingtonsDisease from 'views/huntingtons-disease';
import AncientWheat from 'views/ancient-wheat';
import AboutTheTrust from 'views/about-the-trust';
import ContactUs from 'views/contact-us';
import Links from 'views/links';
*/

// declare our routes and their hierarchy
var routes = (
    <Route handler={App}>
        <DefaultRoute handler={Index} />
        <Route name='index' handler={Index} />
        <Route name='montys-surprise' handler={MontysSurprise} />
        <Route name='heirloom-tomatoes' handler={HeirloomTomatoes} />
        {/*
        <Route name='heirloom-beans' handler={HeirloomBeans} />
        <Route name='plums-peaches' handler={PlumsPeaches} />
        <Route name='huntingtons-disease' handler={HuntingtonsDisease} />
        <Route name='ancient-wheat' handler={AncientWheat} />

        <Route name='about-the-trust' handler={AboutTheTrust} />
        <Route name='contact-us' handler={ContactUs} />
        <Route name='links' handler={Links} />
        */}
    </Route>
);

export default routes;

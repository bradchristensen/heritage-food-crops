import React from "react";
import { Route, Switch } from "react-router-dom";

import Index from "../views/Index";
import PageNotFound from "../views/PageNotFound";
import MontysSurprise from "../views/MontysSurprise/Index";
import HeirloomTomatoes from "../views/HeirloomTomatoes/Index";
import HeirloomTomatoesHealthPotential from "../views/HeirloomTomatoes/HealthPotential";
import HeirloomTomatoesPastResearch from "../views/HeirloomTomatoes/PastResearch";
import HeirloomTomatoesTetraCisLycopeneTable from "../views/HeirloomTomatoes/TetraCisLycopeneTable/Index";
import HeirloomBeans from "../views/HeirloomBeans/Index";
import PlumsPeaches from "../views/PlumsPeaches";
import HuntingtonsDisease from "../views/HuntingtonsDisease";
import AncientWheat from "../views/AncientWheat";
import Publications from "../views/Publications";
import AboutTheTrust from "../views/AboutTheTrust";
import ContactUs from "../views/ContactUs";
import Links from "../views/Links";
import withTracker from "./withTracker";

const routes = (
  <Switch>
    <Route exact path="/" component={withTracker(Index)} />

    <Route path="/montys-surprise" component={withTracker(MontysSurprise)} />
    <Route
      path="/heirloom-tomatoes/past-research"
      component={withTracker(HeirloomTomatoesPastResearch)}
    />
    <Route
      path="/heirloom-tomatoes/health-potential"
      component={withTracker(HeirloomTomatoesHealthPotential)}
    />
    <Route
      path="/heirloom-tomatoes/tetra-cis-lycopene"
      component={withTracker(HeirloomTomatoesTetraCisLycopeneTable)}
    />
    <Route
      path="/heirloom-tomatoes"
      component={withTracker(HeirloomTomatoes)}
    />
    <Route path="/heirloom-beans" component={withTracker(HeirloomBeans)} />
    <Route path="/plums-peaches" component={withTracker(PlumsPeaches)} />
    <Route
      path="/huntingtons-disease"
      component={withTracker(HuntingtonsDisease)}
    />
    <Route path="/ancient-wheat" component={withTracker(AncientWheat)} />

    <Route path="/publications" component={withTracker(Publications)} />

    <Route path="/about-the-trust" component={withTracker(AboutTheTrust)} />
    <Route path="/contact-us" component={withTracker(ContactUs)} />
    <Route path="/links" component={withTracker(Links)} />

    <Route component={withTracker(PageNotFound)} />
  </Switch>
);

export default routes;

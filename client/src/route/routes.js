import React from "react";
import { Switch, Route } from "react-router-dom";
import NotFound from "../NotFound/NotFound";
import requireAuth from "../utilities/AuthenticatedComponent/index";
import Home from "../home/home";
import OneExpedContainer from "../OneExpedition/OneExpedContainer";
import OneCaveContainer from "../OneCave/OneCaveContainer";
import ListCavesContainer from "../ListCaves/ListCavesContainer";
import ListExpedContainer from "../ListExpeditions/ListExpedContainer";
import AboutUs from "../AboutUs/AbautUs";
import Admin from "../admin/admin";
import UserContainer from "../adminLogIn/UserContainer";

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/cave/:id" component={OneCaveContainer} />
        <Route path="/cave" component={ListCavesContainer} />
        <Route path="/expedition/:id" component={OneExpedContainer} />
        <Route path="/expedition" component={ListExpedContainer} />
        <Route path="/aboutus" component={AboutUs} />
        <Route path="/admin" component={requireAuth(Admin)} />
        <Route exact path="/login" component={UserContainer} />
        <Route exact path="/" component={Home} />
        <Route path="*" component={NotFound} />
      </Switch>
    );
  }
}
export default Routes;

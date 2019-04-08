import React from "react";
import { Switch,Route} from "react-router-dom";
import NotFound from "../NotFound/NotFound";
import requireAuth from "../utilities/AuthenticatedComponent/index";
import Home from "../home/home";
import Admin from "../admin/admin";
import UserContainer  from "../adminLigIn/UserContainer";


class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/admin" component={requireAuth(Admin)} />
        <Route path="/login" component={UserContainer} />
        <Route path="*" component={NotFound} />
      </Switch>
    );
  }
}
export default Routes;
import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import GetAllExpeditions from "./Expedition/AllExpedition";
import GetAllCaves from "./Caves/AllCave";
import OneCaveContainer from "../OneCave/OneCaveContainer";
import AddCave from "./Caves/AddCave";
import UpdateCave from "./Caves/UpdateCave";
import AddExpedition from "./Expedition/AddExpedition";
import OneExpeditionContainer from "../OneExpedition/OneExpedContainer";
import UpdateExpedition from "./Expedition/UpdateExpedition";
import PhotoGallery from "./Photo/photo";
import NotFound from "../NotFound/NotFound";

const AdminRoutes = () => (
  <Switch>
    <Route exact path={"/admin"} render={() => <Redirect to="/admin/cave" />} />
    <Route path="/admin/cave/:id" component={OneCaveContainer} />
    <Route path="/admin/update-cave/:id" component={UpdateCave} />
    <Route path="/admin/add-cave" component={AddCave} />
    <Route exact path="/admin/cave" component={GetAllCaves} />

    <Route path="/admin/expedition/:id" component={OneExpeditionContainer} />
    <Route path="/admin/update-expedition/:id" component={UpdateExpedition} />
    <Route path="/admin/add-expedition" component={AddExpedition} />

    <Route exact path="/admin/expedition" component={GetAllExpeditions} />
    <Route path="/admin/photo/:id" component={PhotoGallery} />
    <Route path="*" component={NotFound} />
  </Switch>
);
export default AdminRoutes;

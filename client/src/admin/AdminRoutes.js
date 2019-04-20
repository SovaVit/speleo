import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import GetAllExpeditions from "./Expedition/AllExpedition";
import GetAllCaves from "./Caves/AllCave";
import OneCave from "./Caves/OneCave";
import AddCave from "./Caves/AddCave";
import UpdateCave from "./Caves/UpdateCave";
import AddExpedition from "./Expedition/AddExpedition";
import OneExpedition from "./Expedition/OneExpedition";
import UpdateExpedition from "./Expedition/UpdateExpedition";

const AdminRoutes = () => (
  <Switch>
    <Redirect exact from={"/admin"} to={"/admin/cave"} />
    <Route path="/admin/cave/:id" component={OneCave} />
    <Route path="/admin/cave" component={GetAllCaves} />  
    <Route path="/admin/add-cave" component={AddCave} />
    <Route path="/admin/update-cave/:id" component={UpdateCave} />
    <Route path="/admin/expedition/:id" component={OneExpedition} />
    <Route path="/admin/expedition" component={GetAllExpeditions} />
    <Route path="/admin/add-expedition" component={AddExpedition} />
    <Route path="/admin/update-expedition/:id" component={UpdateExpedition} />
  </Switch>
);
export default AdminRoutes;

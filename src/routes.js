import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Main from './pages/main/index';
import Product from './pages/product/index';
import maps from './pages/maps/maps';
import Home from './pages/home/index';
const Routes = ()=>(
    <BrowserRouter>
    <Switch>
        <Route exact path= "/" component={Main}/>
        <Route path="/products/:id" component={Product}/>
        <Route path="/maps" component={maps}/>
        <Route path="/home" component={Home}/>
    </Switch>
    </BrowserRouter>
);
export default Routes;
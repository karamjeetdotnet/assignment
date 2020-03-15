import React from 'react';
import { Route, Switch, Redirect, NavLink } from 'react-router-dom';
import Loading from '../containers/loading';
import NotFound from '../containers/notfound';
import Services from '../containers/services';

const Routes = ({}) => {
    return (
        <div>
            <Loading />
            <div className="nav nav-tabs">
            <li class="nav-item"><NavLink to={`/services`} activeClassName="active" className="nav-link">Services</NavLink></li>
      </div>
      <div className="tabs">
        <Switch>
        <Route path="/services" component={Services} />
                <Route exact path="/">
                    <Redirect to="/services" />
                </Route>
                <Route component={NotFound} />
        </Switch>
      </div>
        </div>
    );
};
export default Routes;
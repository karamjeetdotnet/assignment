import React from 'react';
import { Route, Switch, Redirect, NavLink } from 'react-router-dom';
import Loading from '../containers/loading';
import NotFound from '../containers/notfound';
import Part1 from '../containers/part1';
import Part2 from '../containers/part2';

const Routes = ({}) => {
    return (
        <div>
            <Loading />
            <div className="nav nav-tabs">
            <li class="nav-item"><NavLink to={`/part1`} activeClassName="active" className="nav-link">Part1</NavLink></li>
            <li class="nav-item"><NavLink to={`/part2`} activeClassName="active" className="nav-link">Part2</NavLink></li>
      </div>
      <div className="tabs">
        <Switch>
        <Route path="/part1" component={Part1} />
        <Route path="/part2" component={Part2} />
                <Route exact path="/">
                    <Redirect to="/part1" />
                </Route>
                <Route component={NotFound} />
        </Switch>
      </div>
        </div>
    );
};
export default Routes;
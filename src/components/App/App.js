import React, { PureComponent } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { AuthorizeProvider } from 'components/AuthorizeProvider';

import Login from 'components/Login';
import Private from 'components/Private';
import Public from 'components/Public';
import PrivateRoute from 'components/PrivateRoute';

export class App extends PureComponent {
  render() {
    return (
      <AuthorizeProvider>
        <section>
            <Switch>
                <Route
                    path="/"
                    exact component={ Login }
                />
                <Route
                    path="/public"
                    exact component={ Public }
                />  
                <Route
                    path="/login"
                    component = { Login }
                />
                <PrivateRoute
                    path="/private"
                    component={ Private}
                />
            </Switch>
        </section>
      </AuthorizeProvider>
    );
  }
}

export default withRouter(App);

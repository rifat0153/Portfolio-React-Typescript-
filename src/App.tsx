import * as React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import { About } from './pages/About';
import HomePage from './pages/HomePage';
import { Technology } from './pages/Technology';
export interface IAppProps {}

export const App = (props: IAppProps) => {
  return (
    <div className="font-sans font-normal">
      <Router>
        <header>
          <Header />
        </header>

        <div>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/tech">
              <Technology />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
};

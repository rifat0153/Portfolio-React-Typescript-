import { Button, Container, Grid, Typography } from '@material-ui/core';
import * as React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Header from './components/Header/Header';
import { HomePage } from './home/HomePage';
export interface IAppProps {}

export const App = (props: IAppProps) => {
  return (
    <div>
      <Router>
        <Grid>
          <Grid item>
            <Header />
          </Grid>

          <Grid item>
            <Switch>
              <Route path="/work">
                <Typography>Work</Typography>
              </Route>

              <Route path="/about">
                <Typography>about</Typography>
              </Route>

              <Route path="/contact">
                <Typography>contact</Typography>
              </Route>

              <Route path="/" exact>
                {/* <Homepage /> */}
                <HomePage />
              </Route>
            </Switch>
          </Grid>
        </Grid>

   
      </Router>
    </div>
  );
};

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import { AboutPage } from './pages/AboutPage';
import HomePage from './pages/HomePage';
import { TechnologyPage } from './pages/TechnologyPage';
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
              <TechnologyPage />
            </Route>
            <Route exact path="/about">
              <AboutPage />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
};

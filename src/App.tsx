import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import { AboutPage } from './pages/AboutPage';
import HomePage from './pages/HomePage';
import { TechnologyPage } from './pages/TechnologyPage';

export const App = () => {
  return (
    <div className="font-sans font-normal">
      <Router>
        <div className="relative z-50">
          <Header />
        </div>

        <div className="relative z-0">
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

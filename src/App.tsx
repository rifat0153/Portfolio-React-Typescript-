import * as React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import  HomePage  from './pages/HomePage';
export interface IAppProps {}

export const App = (props: IAppProps) => {
  return (
    <div className="font-sans font-normal">
      <Router>
        
        <header>
          <Header />
        </header>

        <div>
          <HomePage />
        </div>

   
      </Router>
    </div>
  );
};

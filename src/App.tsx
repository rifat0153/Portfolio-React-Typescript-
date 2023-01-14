import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import { AboutPage } from './pages/AboutPage';
import HomePage from './pages/HomePage';
import { TechnologyPage } from './pages/TechnologyPage';
import { store } from './store/store';

export const App = () => {
  return (
    <div className="font-sans font-normal">
      <Provider store={store}>
        <BrowserRouter>
          <div className="relative z-50">
            <Header />
          </div>

          <Routes>
            <Route path="/" element={<HomePage />} />

            <Route path="/tech" element={<TechnologyPage />} />

            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
};

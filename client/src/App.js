import React from 'react';
import {BrowserRouter as Router } from 'react-router-dom'
import {HeaderMenu} from './components/headermenu/headermenu'
import { FooterComponent } from './components/footercmp/footercmp';
import { useRoutes } from './routes';

import './App.css';
import ScrollToTop from './components/scrollToTop';


function App() {
  const routes = useRoutes()
  return (
    <Router>
      <ScrollToTop />
      <HeaderMenu />
        <div className="app-container">
          {routes}
        </div>
      <FooterComponent />

    </Router>
  );
}

export default App;

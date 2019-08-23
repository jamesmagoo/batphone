import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Songs from './components/songs/Songs';

import { Provider } from './context';
import Apparitions from './components/apparitions/Apparitions';


function App() {
  return (
    <Provider>
    <Router>
      <React.Fragment>
        <Navbar/>
          <div className="container">
              <div className="row">
                  <div className="col-8">
                      <Apparitions/>
                  </div>
                  <div className="col-4">
                      <Songs/>
                  </div>
              </div>
          </div>

      </React.Fragment>

    </Router>
    </Provider>
  );
}

export default App;

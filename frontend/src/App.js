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
        <Switch>
        <Route exact path="/" component = {Apparitions}></Route>
        <Route path="/apparitions/song/:songID" component = {Apparitions}></Route>
        </Switch>
        <Songs/>
        </div>
        </div>
      </React.Fragment>
    </Router>
    </Provider>
  );
}

export default App;

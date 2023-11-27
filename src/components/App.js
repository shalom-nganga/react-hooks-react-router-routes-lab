import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import Movies from './Movies';
import Directors from './Directors';
import Actors from './Actors';

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/movies" component={Movies} />
        <Route path="/directors" component={Directors} />
        <Route path="/actors" component={Actors} />
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
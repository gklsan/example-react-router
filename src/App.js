import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';

export default function App() {
  return(
      <Switch>
        <Route  component={HomePage} />
      </Switch>
  )
}

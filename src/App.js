import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './components/Main';
import GeneratePassword from './components/GeneratePassword';
import MyPasswords from './components/MyPasswords';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/generate-password" component={GeneratePassword} />
        <Route Link="http://localhost:3001/passwords" component={MyPasswords} />
      </Switch>
    </Router>
  );
}

export default App;
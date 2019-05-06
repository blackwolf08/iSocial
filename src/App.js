import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import SignUp from './components/SignUp'
import AuthLogin from './components/AuthLogin';
import AuthContainer from './components/AuthContainer';

function App() {
  return (
    <Router>
      <div style={styles.root}>
        <Route exact path="/" component={AuthContainer} />
        <Route path="/login" component={AuthLogin} />
        <Route path="/signup" component={SignUp} />
      </div>
    </Router>
  );
}

const styles = {
  root: {
    height: '100%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
}

export default App;

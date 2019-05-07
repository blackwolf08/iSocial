import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import SignUp from './components/AuthComponents/SignUp'
import AuthLogin from './components/AuthComponents/AuthLogin';
import AuthContainer from './components/AuthComponents/AuthContainer';
import Feed from './components/HomeComponents/Feed'
import store from './store'
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store={store}>
        <Router>
          <div style={styles.root}>
            <Route exact path="/" component={AuthContainer} />
            <Route path="/login" component={AuthLogin} />
            <Route path="/signup" component={SignUp} />
            <Route path="/feed" component={Feed} />
          </div>
        </Router>
    </Provider>
  );
}

const styles = {
  root: {
    height: '100%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: '500px',
  }
}

export default App;

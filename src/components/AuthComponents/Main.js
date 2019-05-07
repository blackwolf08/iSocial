import React, { Component } from 'react';
import '../../App.css';
import { Route, Switch, withRouter } from 'react-router-dom'
import SignUp from '../AuthComponents/SignUp'
import AuthLogin from '../AuthComponents/AuthLogin';
import AuthContainer from '../AuthComponents/AuthContainer';
import Feed from '../HomeComponents/Feed'
import withAuth from "../hocs/withAuth"
import { connect } from 'react-redux'
import {authUser} from '../../actions/auth';


class Main extends Component {
  render() {
    const {authUser, currentUser} = this.props;
    return (
      <Switch>
        <div style={styles.root}>
          <Route exact path="/" component={AuthContainer} />
          <Route exact path="/login" render={props =>(
            <AuthLogin signin onAuth={authUser} {...props}/>
          )} />
          <Route exact path="/signup" render={props =>(
            <SignUp signup onAuth={authUser} {...props}/>
          )} />
          <Route exact path="/feed" component={withAuth(Feed)} />
        </div>
      </Switch>
    )
  }
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

  function mapStateToProps(state){
    return {
      currentUser: state.currentUser,
    };
  }

  export default withRouter(connect(mapStateToProps, {authUser})(Main));
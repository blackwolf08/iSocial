import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';


const styles = {
  root: {
    width: '100%',
    backgroundColor : '#eee',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    zIndex: '100',
    bottom: 0
  },
  link: {
      color: '#333',
      textDecoration: 'none'
  },
  text : {
      color: '#A9A9A9'
  }
};

class BottomLoginBar extends React.Component {


  render() {
    const { classes } = this.props;

    return (
      <BottomNavigation
        className={classes.root}
      >
        <p className={classes.text}>Have an account?<a className={classes.link} href="/">Log in</a></p>
      </BottomNavigation>
    );
  }
}


export default withStyles(styles)(BottomLoginBar);
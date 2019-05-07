import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'sticky',
    bottom: 0,
    backgroundColor: '#fff',
    height: '50px'
  },
};

class BottomNav extends React.Component {
  state = {
    value: 'recents',
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div value={value} onChange={this.handleChange} className={classes.root}>
        <i style={{color: 'black'}} className="fas fa-home"></i>
        <i className="fas fa-search"></i>
        <i className="far fa-plus-square"></i>
        <i className="far fa-heart"></i>
        <i className="far fa-user"></i>
      </div>
    );
  }
}


export default withStyles(styles)(BottomNav);

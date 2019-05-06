import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
};

function ImageAvatars(props) {
  const { classes } = props;
  const { name } = props;
  return (
    <div style={styles.root}>
      <Avatar alt={ name } src="https://picsum.photos/100" className={classes.Avatar} />
      <p>{ name }</p>
    </div>
  );
}

ImageAvatars.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImageAvatars);
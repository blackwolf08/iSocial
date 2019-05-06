import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import { Avatar } from '@material-ui/core';

const styles = {
  card: {
    maxWidth: '100%',
    marginTop: '20px'
  },
  media: {
    objectFit: 'cover',
  },
};

function FeedCard(props) {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={props.name}
          className={classes.media}
          height="140"
          image="http://lorempixel.com/600/400"
          title={props.title}
          style={{backgroundPosition:'center center', backgroundSize:'cover', backgroundRepeat:'no-repeat'}}
        />
        <CardContent>
        <div style={{display: 'flex', alignItems:'center'}}>
            <Avatar src="https://picsum.photos/50" />
            <h5 style={{margin: '5px', color: 'black'}}>{props.name}</h5>
        </div>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
            <i class="far fa-heart"></i>
        </Button>
        <Button size="small" color="primary">
            <i class="far fa-comment"></i>
        </Button>
      </CardActions>
    </Card>
  );
}

FeedCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FeedCard);
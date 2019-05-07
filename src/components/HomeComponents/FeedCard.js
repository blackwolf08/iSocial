import React, { Component } from 'react';
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
    Width: '100%',
    marginTop: '20px',
    height: '400px'
  },
  media: {
    objectFit: 'cover',
  },
};


class FeedCard extends Component {

    state = {
      isClicked: false,
      likeClass: "far fa-heart",
      color: 'black'
    }


    liked = ()=>{
      if(!this.state.isClicked)
      {
        this.setState({
          isClicked: !this.state.isClicked,
          likeClass: "fas fa-heart",
          color: 'red'
        })
      }
      else{
        this.setState({
          isClicked: false,
          likeClass: "far fa-heart",
          color: 'black'
        })
      }
    }

    likedDbl = ()=>{
      if(!this.state.isClicked)
      {
        this.setState({
          isClicked: !this.state.isClicked,
          likeClass: "fas fa-heart",
          color: 'red'
        })
      }
      else{
        this.setState({
          isClicked: false,
          likeClass: "far fa-heart",
          color: 'black'
        })
      }
    }
  render() {
    const { classes }  = this.props;
    return (
        <Card className={classes.card}>
        <CardActionArea  onDoubleClick={this.likedDbl}>
          <CardMedia
            component="img"
            alt={this.props.name}
            className={classes.media}
            height="140"
            image="http://lorempixel.com/600/400"
            title={this.props.title}
            style={{backgroundPosition:'center center', backgroundSize:'cover', backgroundRepeat:'no-repeat', height:'300px'}}
          />
          <CardContent  style={{height:'50px'}}>
          <div style={{display: 'flex', alignItems:'center'}}>
              <Avatar src="https://picsum.photos/50" />
              <h5 style={{margin: '5px', color: 'black'}}>{this.props.name}</h5>
          </div>
          </CardContent>
        </CardActionArea>
        <CardActions style={{height:'50px'}}>
          <Button size="small" color="primary" onClick={this.liked}>
              <i style={{fontSize: '200%', color: this.state.color}} className={this.state.likeClass}></i>
          </Button>
          <Button size="small" color="primary">
              <i style={{fontSize: '200%', color: 'black'}} className="far fa-comment"></i>
          </Button>
        </CardActions>
      </Card>
    )
  }
}




export default withStyles(styles)(FeedCard);
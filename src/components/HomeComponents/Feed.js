import React, { Component } from 'react'
import Avatar from './Avatar'
import TopFeedNavBar from './TopFeedNavBar'
import BottomNav from './BottomNav'
import FeedCard from './FeedCard'

export default class Feed extends Component {

    state ={
        photos : [],
        posts : [],
        users : []
    }

    componentDidMount()
    {
        fetch('https://jsonplaceholder.typicode.com/photos?_limit=10')
        .then(response => response.json())
        .then(json => {
            this.setState({
                photos: json
            })
        });

        fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
        .then(response => response.json())
        .then(json => {
            this.setState({
                posts: json
            })
        });

        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => {
            this.setState({
                users: json
            })
        });
        

    }

  render() {

    let people = this.state.users.map((name)=>{
        return (
        <div key={name.id} style={{margin: '5px'}}>
            <Avatar name={name.name} />
        </div>
        );
    })

    let peopleCards = this.state.photos.map((card)=>{
        return (
            <div>
                <FeedCard title={card.title} image={card.url}/>
            </div>
        )
    })

    return (
      <div style={styles.root}>
        <TopFeedNavBar />
        <div style={styles.avatars}>
            {people}
        </div>
        <div>
            {peopleCards}
        </div>
        <BottomNav />
      </div>
    )
  }
}

const styles = {
    avatars: {
        display: 'flex',
        overflowY: 'scroll',
        backgroundColor:'#f2f2f2',
        height: '80px'
    },
    root: {
        width: '100%',
        height: '100%'
    }
}
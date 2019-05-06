import React, { Component } from 'react'
import Avatar from './Avatar'
import TopFeedNavBar from './TopFeedNavBar'
import BottomNav from './BottomNav'

export default class Feed extends Component {

    state = {
        people: [
            "Sunny",
            "Parth",
            "Alisha",
            "Darksun",
            "Kunal",
            "Sunny",
            "Parth",
            "Alisha",
            "Darksun",
            "Kunal",
            "Sunny",
            "Parth",
            "Alisha",
            "Darksun",
            "Kunal"
        ]
    }


  render() {

    let people = this.state.people.map((name)=>{
        return (
        <div style={{margin: '5px'}}>
            <Avatar name={name} />
        </div>
        );
    })

    return (
      <div style={styles.root}>
        <TopFeedNavBar />
        <div style={styles.avatars}>
            {people}
        </div>
        <span></span>
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
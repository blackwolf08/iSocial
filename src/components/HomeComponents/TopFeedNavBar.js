import React, { Component } from 'react'

export default class TopFeedNavBar extends Component {
  render() {
    return (
      <div style={styles.root}>
        <p><i class="fas fa-camera"></i></p>
        <p className="logo" style={{color: 'black'}}>iSocial</p>
        <p>
        <i class="fas fa-plus"></i>
        <i class="fas fa-user"></i>
        </p>
      </div>
    )
  }
}


const styles ={
    root:{
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        height: '50px',
        borderBottom: '1px solid #d2d2d2',
        padding: '10px',
        paddingTop: '25px'
    }
}
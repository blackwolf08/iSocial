import React, { Component } from 'react'
import BottomLoginBar from './BottomLoginBar'

export default class AuthLogin extends Component {

    state ={
        isDisabled : true
    }

    onSubmit = (e) => {
        e.preventDefault();
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })

        if(this.state.username && this.state.password)
        {
            this.setState({
                isDisabled: false
            })
        }
    }

  render() {
    return (
      <div style={styles.root}>
        <h1 style={{color:'black'}} className="logo" >iSocial</h1>
        <button type="button" style={styles.button} className="btn btn-primary"><i class="fab fa-facebook-square"></i> Continue with Facebook</button>
        <div style={styles.or}>
            <hr style={styles.hr} />
            <span style={styles.orText}>OR</span>
            <hr style={styles.hr} />
        </div>
        <form style={styles.form} onSubmit={this.handleSubmit}>
            <input value={this.state.username} onChange={this.handleChange} name="username" style={styles.input} type="text" placeholder="Phone number, username or email" />
            <input value={this.state.password} onChange={this.handleChange} name="password" style={styles.input} type="password" placeholder="Password" />
            <button disabled={this.state.isDisabled} type="submit" style={styles.button} className="btn btn-primary">Login</button>
        </form>
        <a href="/" style={{marginTop: '10px'}}>Forgot Password?</a>
        <BottomLoginBar />
      </div>
    )
  }
}

const styles = {
    root: {
        height: '80%',
        width: '80%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        },
    logo: {
        height: '100px',
        width: '200px'
    },
    button: {
        width: '100%',
        marginTop: '20px'
    },
    or: {
        display: 'flex',
        alignItems: 'center',
        marginTop: '20px'
    },
    hr: {
        width: '50px'
    },
    orText: {
        marginLeft: '10px',
        marginRight: '10px'
    },
    link: {
        marginTop: '20px'
    },
    form: {
        width: '100%'
    },
    input: {
        width: '100%',
        outline: 'none',
        border: 'none',
        margin: '10px 0 10px 0',
        backgroundColor: '#eee',
        padding: '8px',
        borderRadius: '5px'
    }
}
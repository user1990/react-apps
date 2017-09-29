import React, { Component } from 'react';
import firebase from '../config/firebase'

class Authentication extends Component {

  constructor(props){
    super(props);

    this.state = {
      error: ''
    };
  }

  login = (e) => {
    const email = this.refs.email.value;
    const password = this.refs.password.value;

    const auth = firebase.auth();
    const promise = auth.signInWithEmailAndPassword(email, password);

    promise
      .then(user => {
        const logout = document.getElementById('logout');
        logout.classList.remove('hide');
      })
      .catch(e => {
      let error = e.message;
      this.setState({error})
    })
  }

  logout = () => {
    firebase.auth().signOut();
    const logout = document.getElementById('logout');
    logout.classList.add('hide');
  }

  signup = () => {
    const email = this.refs.email.value;
    const password = this.refs.password.value;

    const auth = firebase.auth();
    const promise = auth.createUserWithEmailAndPassword(email, password);

    promise
      .then(user => {
        const error = `Welcome ${user.email}`;
        firebase.database().ref('users/' + user.id).set({
          email: user.email
        });
        this.setState({error});
      })
      .catch(e => {
        const error = e.message;
        this.setState(({error}))
      });
  }

  google = () => {
    let provider = new firebase.auth.GoogleAuthProvider();
    let promise = firebase.auth().signInWithPopup(provider);

    promise
      .then(result => {
        let user = result.user;
        firebase.database().ref('users/' + user.uid).set({
          email: user.email,
          name: user.displayName
        });
      })
      .catch(e => {
        const error = e.message;
        this.setState(({error}))
      });
  }

  render() {
    return (
      <div>
        <input id="email" ref="email" type="email" placeholder="Enter your email" /><br />
        <input id="pass" ref="password" type="password" placeholder="Enter your password" /><br />
        <p>{this.state.error}</p>
        <button onClick={this.login}>Log In</button>
        <button onClick={this.signup}>Sign Up</button>
        <button onClick={this.logout} id="logout" className="hide">Log out</button><br />
        <button onClick={this.google} id="google" className="google">Sign in with Google</button>
      </div>
    );
  }
}

export default Authentication;
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Coursesales from './components/CourseSales'
import Course from './components/Course'

class App extends Component {
  render() {
    const courses = [
      { name: 'Complete i0S10 dev course', price: 199},
      { name: 'Complete react course dev course', price: 159},
      { name: 'Complete front-end full-stack course', price: 169},
      { name: 'Complete web app dev course', price: 129},
      { name: 'Foundations of Front-End Web Development', price: 129},
      { name: 'The Complete front end web developer Bootcamp', price: 100},
      { name: 'Become a fully fledged Front-End Developer', price: 149},
    ]
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to <strong>Course</strong> Purchase Page..</h2>
        </div>
        <Coursesales items={courses}/>
        <Course />
      </div>
    );
  }
}

export default App;

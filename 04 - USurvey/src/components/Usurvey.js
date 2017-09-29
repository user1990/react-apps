import React, { Component } from 'react';
import firebase from '../config/firebase'
const uuid = require('uuid');

class Usurvey extends Component {
  constructor(props){
    super(props);

     this.state = {
       uid: uuid.v1(),
       studentName: '',
       answers: {
         answer1: '',
         answer2: '',
         answer3: '',
         answer4: '',
         answer5: ''
       },
       isSubmitted: false
     };
  }

  nameSubmit = (e) => {
    e.preventDefault();
    let studentName = this.refs.name.value;
    this.setState({studentName: studentName}, function () {
      console.log(this.state)
    });
  }

  answerSelected = (e) => {
    let answers = this.state.answers;
    if (e.target.name === 'answer1') {
      answers.answer1 = e.target.value;
    } else if (e.target.name === 'answer2') {
      answers.answer2 = e.target.value;
    } else if (e.target.name === 'answer3') {
      answers.answer3 = e.target.value;
    } else if (e.target.name === 'answer4') {
      answers.answer4 = e.target.value;
    } else if (e.target.name === 'answer5') {
      answers.answer5 = e.target.value;
    }
    this.setState({answers: answers}, function () {
      console.log(this.state);
    })
  }

  questionSubmit = () => {
    firebase.database().ref('uSurvey/' + this.state.uid).set({
      studentName: this.state.studentName,
      answers: this.state.answers
    })
    this.setState({isSubmitted: true});
  }

  render() {
    let studentName;
    let questions;

    if (this.state.studentName === '' && this.state.isSubmitted === false) {
      studentName = <div>
        <h1>Hey Student, please let us know your name: </h1>
        <form onSubmit={this.nameSubmit}>
          <input className="name" type="text" placeholder="Enter your name" ref="name" />
        </form>
      </div>;
      questions = '';
    } else if (this.state.studentName !== '' && this.state.isSubmitted === false) {
      studentName = <h1>Welcome to U-Survey, {this.state.studentName}</h1>;
      questions = <div>
        <h2>Here are some questions: </h2>
        <form onSubmit={this.questionSubmit}>
          <div className="card">
            <label>What kind of courses you like the most: </label><br />
            <input type="radio" name="answer1" value="Technology" onChange={this.answerSelected} />Technology
            <input type="radio" name="answer1" value="Design" onChange={this.answerSelected} />Design
            <input type="radio" name="answer1" value="Programming" onChange={this.answerSelected} />Programming
          </div>
          <div className="card">
            <label>You are a: </label><br />
            <input type="radio" name="answer2" value="Student" onChange={this.answerSelected} />Student
            <input type="radio" name="answer2" value="In-job" onChange={this.answerSelected} />In-job
            <input type="radio" name="answer2" value="Looking-job" onChange={this.answerSelected} />Looking-job
          </div>
          <div className="card">
            <label>Is Online learning helpful: </label><br />
            <input type="radio" name="answer3" value="Yes" onChange={this.answerSelected} />Yes
            <input type="radio" name="answer3" value="No" onChange={this.answerSelected} />No
            <input type="radio" name="answer3" value="Maybe" onChange={this.answerSelected} />Maybe
          </div>
          <div className="card">
            <label>Is course content live, self-paced or both: </label><br />
            <input type="radio" name="answer4" value="Live" onChange={this.answerSelected} />Live
            <input type="radio" name="answer4" value="Self-paced" onChange={this.answerSelected} />Self-paced
            <input type="radio" name="answer4" value="Both" onChange={this.answerSelected} />Both
          </div>
          <div className="card">
            <label>Is it clear what you will learn from a course: </label><br />
            <input type="radio" name="answer5" value="Yes" onChange={this.answerSelected} />Yes
            <input type="radio" name="answer5" value="No" onChange={this.answerSelected} />No
            <input type="radio" name="answer5" value="Maybe" onChange={this.answerSelected} />Maybe
          </div>
          <input type="submit" className="feedback-button" value="submit" />
        </form>
        <footer>
          <div>
            <ul>
              <li><p>U-Survey, @2017</p></li>
            </ul>
          </div>
        </footer>
      </div>
    } else if (this.state.isSubmitted === true) {
      studentName = <h1>Thanks, {this.state.studentName}</h1>
    }

    return (
      <div>
        {studentName}
        ============================================
        {questions}
      </div>
    );
  }
}

export default Usurvey;
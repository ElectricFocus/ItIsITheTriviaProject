import React, { Component, useState } from "react";
import "../css/App.css";
import data from "../sample_data.json";


function Question(props) {
  //return "<question" + val + "/>"
  return (
    <div>
      <p> {props.text} </p>
      <button><Answer text={props.choices[0]} /> </button>
      <button><Answer text={props.choices[1]} /> </button>
      <button> <Answer text={props.choices[2]} /> </button>
      <button> <Answer text={props.choices[3]} /> </button>
    </div>
  );
  
}
function answer1(){
  
}
function answer2(){

}
function answer3(){

}
function answer4(){

}
function App() {
  let currentquestion = 0;
  return (
    <div className="app">
      <Question
        text={data[currentquestion].question.text}
        choices={data[currentquestion].question.choices}
      />
      <NextQuestion />
    </div>
  );
}
function NextQuestion() {
  return (
    <div className="app">
      <button> press me to move on </button>
      
    </div>
  );
}
function Answer(props) {
  return (
    <div>
      <p> {props.text}</p>
    </div>
  );
}
export default App;

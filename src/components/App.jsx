import React, { Component, useState } from "react";
import "../css/App.css";
import data from "../sample_data.json";

function Question(props) {
  //return "<question" + val + "/>"
  return (
    <div>
      <p id="title"> {props.text} </p>
      <button>
        <Answer text={props.choices[0]} />{" "}
      </button>
      <button>
        <Answer text={props.choices[1]} />{" "}
      </button>
      <button>
        {" "}
        <Answer text={props.choices[2]} />{" "}
      </button>
      <button>
        {" "}
        <Answer text={props.choices[3]} />{" "}
      </button>
    </div>
  );
}
/*
{numbers.map((number)=>(
    <p>{number}</p>
))}
{props.choices.map((choice)=> (
  <Answer text ={choice}/>
))}
*/

function color() {}

function App() {
  let [isAnswered, setIsAnswered] = useState(false);
  let currentquestion = 0;
  
  let correctIndex = data[currentquestion].question.correct_choice_index;
  return (
    <div className="app">
      <button onClick={() => setIsAnswered(true)}> 
        {data[currentquestion].question.choices[correctIndex]} 
      </button>
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

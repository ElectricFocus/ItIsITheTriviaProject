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
  let [currentQuestion, setCurrentQuestion] = useState(0);

  let correctIndex = data[currentQuestion].question.correct_choice_index;
  return (
    <div className="app">
      <button onClick={() => setIsAnswered(true)}>
        {isAnswered
          ? data[currentQuestion].question.choices[correctIndex]
          : "unfold answer"}
      </button>
      <Question
        text={data[currentQuestion].question.text}
        choices={data[currentQuestion].question.choices}
      />
      <NextQuestion
        nextQuestion={setCurrentQuestion}
        jazbel={currentQuestion}
        turtle={setIsAnswered}
      />
    </div>
  );
}
function NextQuestion(props) {
  return (
    <div className="app">
      <button
        onClick={() => {
          props.nextQuestion(props.jazbel + 1);
          props.turtle(false);
        }}
      >
        {" "}
        press me to move on{" "}
      </button>
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

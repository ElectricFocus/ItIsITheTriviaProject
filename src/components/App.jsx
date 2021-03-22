import React, { Component, useState } from "react";
import "../css/App.css";
import data from "../sample_data.json";

function Question(props) {
  //return "<question" + val + "/>"
  return (
    <div>
      <p id="title"> {props.text} </p>
      {props.choices.map((choice) => (
        <Answer text={choice} gorilla={props.zebra} />
      ))}
    </div>
  );
}

function App() {
  let [isAnswered, setIsAnswered] = useState(false);
  let [currentQuestion, setCurrentQuestion] = useState(0);

  let correctIndex = data[currentQuestion].question.correct_choice_index;
  return (
    <div className="app">
      <p>
        {isAnswered === data[currentQuestion].question.choices[correctIndex]
          ? data[currentQuestion].question.choices[correctIndex]
          : "choose an answer"}
      </p>
      <Question
        text={data[currentQuestion].question.text}
        choices={data[currentQuestion].question.choices}
        zebra={setIsAnswered}
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
      <button
        onClick={() => {
          props.gorilla(props.text);
        }}
      >
        {" "}
        {props.text}
      </button>
    </div>
  );
}
export default App;

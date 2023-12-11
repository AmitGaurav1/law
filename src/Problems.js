import React, { useState } from "react";
import "./problems.css";
import { useActionData } from "react-router-dom";
import { AskQuestion } from "./AskQuestion";
import { Questions } from "./Questions";
function Problems() {
  const [Question, setQuestions] = useState([]);
  return (
    <div className="problem">
      <AskQuestion Question={Question} setQuestions={setQuestions} />
      <Questions Question={Question} setQuestions={setQuestions} />
    </div>
  );
}

export default Problems;

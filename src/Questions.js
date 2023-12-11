import React from 'react'
import { Link } from 'react-router-dom';
export const Questions = ({ Question, setQuestions }) => {
    console.log(Question)
  const questionAnswer = Question.map((data) => {
    return (
      <Link key={data.id} to={`/${data.questionTitle}`}>
        <h4>{data.questionTitle}</h4>
        <p>{data.question}</p>
      </Link>
    );
  });
  return <div className={`${Question.length?"showQuestion":""} questionAnswer`}>{questionAnswer}</div>;
};

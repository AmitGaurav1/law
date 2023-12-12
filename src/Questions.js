import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const Questions = () => {
  const [questions, setQuestions] = useState([]);
  const [questionverify, setquestionverify] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3002/questiondata");
        const data = await response.json();
        if (data) {
          setQuestions(data);
          setquestionverify(true);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();

    const intervalId = setInterval(fetchData, 10000);

    // Cleanup the interval to prevent memory leaks
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div className={`${questionverify ? "showQuestion" : ""} questionAnswer`}>
        <div className="lawtitle">Law Solver Q&A</div>

        {questions.map((question, index) => (
          <div className='questiondesc' key={index}>
            <h4>{question.title}</h4>
            <p>{question.question}</p>
          </div>
        ))}
      </div>

    </>
  );
};

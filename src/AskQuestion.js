import React, { useState } from "react";
export const AskQuestion = ({ Question, setQuestions }) => {
  const [quesTitle, setQuesTitle] = useState("");
  const [question, setQuestion] = useState("");

  async function askquestionsubmit(e) {
    e.preventDefault();
    const data = {
      title: quesTitle,
      question: question,
    }
    const response = await fetch('http://localhost:3002/question', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response) {
      console.log("Data is not inserted");
    }
    else {
      const data = await response.json();
      console.log(data.message)
    }
  }

  // next function
  function questionHandler(e) {
    setQuestion(e.target.value);
  }
  function quesTitleHandler(e) {
    setQuesTitle(e.target.value);
  }
  function submitQuestion(e) {
    e.preventDefault();

  }
  return (
    <div className="Ask-question">
      <div id="question-box">
        <h2>Ask a Question</h2>
        <form id="question-form" onSubmit={submitQuestion}>
          <label htmlFor="question-title">Title:</label>
          <input
            type="text"
            id="question-title"
            name="question-title"
            required
            value={quesTitle}
            onChange={quesTitleHandler}
          />

          <label htmlFor="question-body">Question:</label>
          <textarea
            id="question-body"
            name="question-body"
            rows="4"
            required
            value={question}
            onChange={questionHandler}
          ></textarea>

          <label htmlFor="image">Image:</label>
          <input type="file" id="image" name="image" accept="image/*" />

          <button onClick={askquestionsubmit}>Submit</button>
        </form>
      </div>
    </div>
  );
};

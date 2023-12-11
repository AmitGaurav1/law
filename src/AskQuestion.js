import React, { useState } from "react";
export const AskQuestion = ({Question,setQuestions}) => {
  const [quesTitle, setQuesTitle] = useState("");
  const [question, setQuestion] = useState("");
  function questionHandler(e) {
    setQuestion(e.target.value);
  }
  function quesTitleHandler(e) {
    setQuesTitle(e.target.value);
  }
  function submitQuestion(e){
     e.preventDefault();
    setQuestions((prev)=>{
        return [
          ...prev,
          {
            questionTitle:quesTitle,
            question:question,
          },
        ];
    })
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

          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

import { useState } from 'react';
import {quiz} from '../data/data.ts';

function Admin({ onGoHome }) {
  const [questionText, setQuestionText] = useState('');
  const [choices, setChoices] = useState(['', '', '', '']);
  const [correctAnswer, setCorrectAnswer] = useState('');
  const [questionsAdded, setQuestionsAdded] = useState([]);

  const addQuestion = () => {
    if (!questionText.trim()) return;
    if (choices.some((choice) => !choice.trim())) return;
    if (!correctAnswer.trim()) return;

    setQuestionsAdded((prev) => [
      ...prev,
      {
        question: questionText.trim(),
        choices: choices.map((choice) => choice.trim()),
        correctAnswer: correctAnswer.trim(),
      },
    ]);

    quiz.totalQuestions=quiz.totalQuestions+1;
    quiz.questions.push({
      question: questionText.trim(),
      choices: choices.map((choice) => choice.trim()),
      correctAnswer: correctAnswer.trim(),
    });
    setQuestionText('');
    setChoices(['', '', '', '']);
    setCorrectAnswer('');
  };

  const updateChoice = (index, value) => {
    setChoices((prev) => prev.map((choice, i) => (i === index ? value : choice)));
  };

  return (
    <>
    

    <div className="container py-5">
      <div className="card mx-auto p-4 bg-dark text-white" style={{ maxWidth: '640px' }}>
        <h2 className="card-title mb-4">Admin Panel</h2>

        <div className="mb-3">
          <label className="form-label">Question</label>
          <input
            type="text"
            className="form-control"
            value={questionText}
            onChange={(e) => setQuestionText(e.target.value)}
            placeholder="Enter the question text"
          />
        </div>

        {choices.map((choice, index) => (
          <div className="mb-3" key={index}>
            <label className="form-label">Choice {index + 1}</label>
            <input
              type="text"
              className="form-control"
              value={choice}
              onChange={(e) => updateChoice(index, e.target.value)}
              placeholder={`Choice ${index + 1}`}
            />
          </div>
        ))}

        <div className="mb-3">
          <label className="form-label">Correct Answer</label>
          <input
            type="text"
            className="form-control"
            value={correctAnswer}
            onChange={(e) => setCorrectAnswer(e.target.value)}
            placeholder="Enter the correct answer text"
          />
        </div>

        <button
          type="button"
          className="btn btn-primary"
          onClick={addQuestion}
          disabled={
            !questionText.trim() ||
            choices.some((choice) => !choice.trim()) ||
            !correctAnswer.trim()
          }
        >
          Add Question
        </button>


        <button
          type="button"
          className="btn btn-primary mt-4"
          onClick={onGoHome}
        >
          Go back to Home
        </button>

        {questionsAdded.length > 0 && (
          <div className="mt-4">
            <h3 className="h5 text-white">Added Questions</h3>
            <ul className="list-group list-group-flush mt-3">
              {questionsAdded.map((item, index) => (
                <li key={index} className="list-group-item bg-transparent text-white border-secondary">
                  <strong>{index + 1}.</strong> {item.question}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
    </>
  );
}

export default Admin;

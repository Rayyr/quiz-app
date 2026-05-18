import { useEffect, useState } from 'react';
import { quiz } from './data/data.ts';
import QuizOption from './components/quizOption.jsx';

const App = () => {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [timer, setTimer] = useState(10);
  const [score,setScore]=useState(0);
  const [finished,setFinished]=useState(false);

  const { questions } = quiz;
  const { question, choices } = questions[activeQuestion];

  const onClickNext = () => {
    const selectedAnswer = choices[selectedAnswerIndex];
    if (selectedAnswer === questions[activeQuestion].correctAnswer) {
      setScore(score+1);
    }

    setSelectedAnswerIndex(null);

    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion(activeQuestion+1);
    } else {
      setFinished(true);
    }
  };

  const onAnswerSelected = (answer, index) => {
    setSelectedAnswerIndex(index);
  };

  useEffect(() => {
    if (timer > 0) {
      const countdown = setInterval(() => setTimer(timer - 1), 1000)
      return () => clearInterval(countdown)
    }
    else {
      setFinished(true);
    }
  }, [timer])

  const restartQuiz = () => {
    setFinished(false);
    setActiveQuestion(0);
    setScore(0);
    setTimer(10);
    setSelectedAnswerIndex(null);
  };
  
  const addLeadingZero = (value) => (value > 9 ? value : `0${value}`);

  return (
    <div className="container py-5">
      <h1 className="h3 text-white mb-4 text-center">Quiz App</h1>
   

      {finished ? (
        <div className="card border-secondary bg-dark text-white">
          <div className="card-body text-center">
            <h2 className="card-title mb-3">Quiz ended!</h2>
            <p className="fs-4 mb-3">Your score: {score} / {questions.length}</p>
          </div>
        </div>
      ) : (
        <div className="card border-secondary bg-dark text-white">
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <div>
                <span className="fs-1 text-info">{addLeadingZero(activeQuestion + 1)}</span>
                <span className="fs-5 text-secondary"> / {addLeadingZero(questions.length)}</span>
              </div>
              <div className="d-flex align-items-center gap-2">
                <span className="fs-4 text-info">00:{addLeadingZero(timer)}</span>
              </div>
            </div>

            <h3 className="card-title mb-4">{question}</h3>

            <form>
              {choices.map((answer, index) => (
                <QuizOption
                  key={answer}
                  index={index}
                  answer={answer}
                  selectedAnswerIndex={selectedAnswerIndex}
                  onAnswerSelected={onAnswerSelected}
                />
              ))}
            </form>

            <div className="text-end mt-4">
              <button
                type="button"
                onClick={onClickNext}
                disabled={selectedAnswerIndex === null}
                className="btn btn-primary"
              >
                {activeQuestion === questions.length - 1 ? 'Finish' : 'Next'}
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="text-center mt-4">
        <button type="button" className="btn btn-secondary" onClick={restartQuiz}>
          Restart Quiz
        </button>
      </div>
    </div>
  );
};

export default App;
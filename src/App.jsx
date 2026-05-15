import { useState } from "react";
import questions from "./data/questions";
import quiz from "./components/Quiz";
import result from "./components/Result";

function App() {
  const [score, setScore] = useState(0);
  const [current, setCurrent] = useState(0);
  const [finished, setFinished] = useState(false);

  const handleAnswer = (option) => {
    if (option === questions[current].answer) setScore(score + 1);
    const next = current + 1;
    if (next < questions.length) {
      setCurrent(next);
      setFinished(true);
    } else {
      setFinished(true);
    }
  };

  return (
    <div>
      <h1>Quiz App</h1>
      {finished ? (
        <p>your score={score}</p>
      ) : (
        <Quiz questionData={questions[current]} onAnswer={handleAnswer} />
      )}
    </div>
  );
}

export default App;

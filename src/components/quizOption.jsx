const QuizOption = ({ index, answer, selectedAnswerIndex, onAnswerSelected }) => {
  return (
    <div className="form-check mb-3">
      <input
        className="form-check-input"
        type="radio"
        id={`choice-${index}`}
        name="quiz"
        value={answer}
        checked={selectedAnswerIndex === index}
        onChange={() => onAnswerSelected(answer, index)}
      />
      <label className="form-check-label text-white" htmlFor={`choice-${index}`}>
        {answer}
      </label>
    </div>
  );
};

export default QuizOption;

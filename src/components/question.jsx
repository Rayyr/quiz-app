function Question({ question, options, onAnswer }) {
 
 return (<div>
    <h2>Question:{question}</h2>
    {options.map((opt, index) => (
      <button key={index} onClick={() => onAnswer(opt)}>
        {opt}
      </button>
    ))}
  </div>
 );
}

export default Question;

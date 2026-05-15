

function Quiz({questionData,onAnswer}){

    return(
        <div>
             <h2>Question : {questionData.question}</h2>
      {questionData.options.map((opt, index) => (
        <button key={index} onClick={() => onAnswer(opt)}>
          {opt}
        </button>
      ))}
        </div>
    );
}


export default Quiz;
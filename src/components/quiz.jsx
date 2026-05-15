import Question from "./Question";

function Quiz({ questionData, onAnswer }) {
    return (
        <div>
            <h2>Quiz:</h2>
            <Question
                question={questionData.question}
                options={questionData.options}
                onAnswer={onAnswer}
            />
        </div>
    );
}


export default Quiz;
import "./Quiz.css"
import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom"
import { getAuth } from "firebase/auth";
import { getDatabase, ref, set, get, child, DataSnapshot } from "firebase/database";
import firebase from './firebase'
import {setDictionaryAnswers} from "./globals"


let form = {}
let quizAnswers = {}
let ansQuiz = {}

const questions = [
	{
		questionText: 'If you had a chance to make an investment. What would you choose',
		answerOptions: [
			{ answerText: 'Unit trusts', isCorrect: false },
			{ answerText: 'Stocks', isCorrect: true },
			{ answerText: 'Offshore accounts', isCorrect: false },
		],
	},
	{
		questionText: 'What percentage of South Africans use side hustles to make their money moves',
		answerOptions: [
			{ answerText: '11%', isCorrect: true },
			{ answerText: '25%', isCorrect: false },
			{ answerText: '50%', isCorrect: false },
		],
	},
	{
		questionText: 'What do we call the individual who advises clients on the best way to make money moves',
		answerOptions: [
			{ answerText: 'An investment banker', isCorrect: false },
			{ answerText: 'An insurance agent', isCorrect: false },
			{ answerText: 'An investment adviser', isCorrect: false },
			{ answerText: 'A financial adviser', isCorrect: true },
		],
	},
	{
		questionText: 'How do you think Momentum makes its money moves',
		answerOptions: [
			{ answerText: 'Having a vision', isCorrect: false },
			{ answerText: 'Financial planning and management', isCorrect: false },
			{ answerText: 'Trading on the JSE', isCorrect: false },
			{ answerText: 'All of the above', isCorrect: true },
		],
	},
	{
		questionText: 'How do you ensure that your household is financially well for rainy days ',
		answerOptions: [
			{ answerText: 'Budgeting', isCorrect: false },
			{ answerText: 'Saving', isCorrect: true },
			{ answerText: 'Stashing money under a mattress', isCorrect: false },
		],
	},
	{
		questionText: 'What\'s a detailed plan of income and expenses expected over a certain period',
		answerOptions: [
			{ answerText: 'A budget', isCorrect: true },
			{ answerText: 'A financial plan', isCorrect: false},
			{ answerText: 'A taxonomy', isCorrect: false },
			{ answerText: 'An investment', isCorrect: false },
		],
	},
	{
		questionText: 'What is the formula to financial success',
		answerOptions: [
			{ answerText: 'Advice, a plan and a budget', isCorrect: true },
			{ answerText: 'Budgeting tool', isCorrect: false },
			{ answerText: 'Using my intuition and a little luck', isCorrect: false },
		],
	},
	{
		questionText: 'True or False. Only 6% of South Africans can retire well',
		answerOptions: [
			{ answerText: 'True', isCorrect: true },
			{ answerText: 'False', isCorrect: false },
		],
	},
	{
		questionText: 'True or false, Compound interest is the interest you earn on interest',
		answerOptions: [
			{ answerText: 'True', isCorrect: true },
			{ answerText: 'False', isCorrect: false },
		],
	},
	{
		questionText: 'It’s Black Friday today, what kind of a shopper are you',
		answerOptions: [
			{ answerText: 'I walk in to investigate the deals ', isCorrect: true },
			{ answerText: 'I know myself and walk in with a trolley ', isCorrect: false },
			{ answerText: 'I only buy what I have budgeted for', isCorrect: false },
		],
	},
];


//saves form info
function handleChange(e) {
	const { id, value } = e.target

	form[id] = value;
}


function saveUserData(score) {
	const uid = getAuth().currentUser.uid;
	const db = getDatabase()
	console.log(quizAnswers)
	set(
		ref(db, `QuizData/${uid}/answers/`),
		quizAnswers
	);
	// 
	// 
	set(
		ref(db, `QuizData/${uid}/quizScore/`),
		{
			"score": score
		}
	);


}

function Quiz() {

	let currentQuiz = 0;

	const dbRef = ref(getDatabase())


	const [error, setError] = useState(false)
	const [state, setState] = useState('');
	const [score, setScore] = useState(0);
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [answer, setAnswer] = useState(0);
	const [showScore, setShowScore] = useState(false);

	const [quizAns, setQuizAns] = useState(false);
	
	const [passed ,setPassed] = useState(false);
	const navigate = useNavigate();


	// const [score, setScore] = useState('');


	useEffect(() => {
		const uid = getAuth().currentUser.uid;
		setState("loading")
		get(child(dbRef, `QuizData/${uid}/quizScore/`))
			.then((snapshot) => {
				if (snapshot.val() !== null) {
					setState('user exists')
					setScore(snapshot.val().score)
				} else {
					setState('success');
				}
			})
			.catch((err) => {
				console.error('Error:', err);
				setState('error');
				setError(err);
			})
	}, []);//
	
	if (state === "error") {
		return (<p>Error</p>);
	} else {
		if (state === 'user exists') {
			return (<>
			<div className='app_'>
			<p>You already completed a quiz, your previous score was {score}</p>
			<button className="answered here-btn" type="button"onClick={(e) => {e.preventDefault();window.location.href='https://www.momentum.co.za/planner/type/mfp'; }}> Connect to an Adviser</button>
			<div><button className="answered" onClick={() => {navigate("/SocialShare");}}>Share</button></div>
			</div>
			</>);
		} else {


			
		
			
			const handleAnswerOptionClick = (isCorrect, answer_op) => {
				console.log(isCorrect + " " + answer_op)
				if (isCorrect) {
					setScore(score + 1);
				}
				if(score > 1){
					setPassed(true);
				}else{
				
					setPassed(false);
				}
				//modify to save users answers and questions plus userID
		
				quizAnswers[answer_op] =  questions[currentQuestion].questionText
				ansQuiz[questions[currentQuestion].questionText] = answer_op
				console.log(questions[currentQuestion].questionText)
		
				const nextQuestion = currentQuestion + 1;
				if (nextQuestion < questions.length) {
					// TODO: color the buttons based on correctness of answer
					// also, deactivate the buttons
					setAnswer(answer_op);
					setTimeout(() => {setCurrentQuestion(nextQuestion)}, 1000);
				} else {	
					console.log(quizAnswers)
					saveUserData(score);
					setShowScore(true);

					setDictionaryAnswers(questions, ansQuiz);
					

				}
		
				//do other things here
			};
		
		
			return (
				
				<>
				
				{/* <div className ="topr"><img src='/image.png'></img></div> */}
				<div className='app_'>

		
					{showScore ? (
						
					<>
					
						<div className='score-section'>
							{<br />}
							{<br />}
							<b>CONGRATULATIONS</b>
							{<br />}
                            {<br />}
							You have successfully completed our make your money move quiz. Well done!
		                    {<br />}
							{<br />}
						   
							<b>You scored {score} out of {questions.length}</b>

							{<br />}
							{<br />}
							{<br />}
                            {<br />}

							<button className="answered here-btn" type="button"onClick={(e) => {e.preventDefault();window.location.href='https://www.momentum.co.za/planner/type/mfp'; }}> Connect to an Adviser</button>
						</div>


						<div><button className="answered" onClick={() => {navigate("/SocialShare");}}>Share</button></div>
						<div><button className="answered here-btn" onClick={()=> {navigate("/Answers")}}>Show Answers</button></div>
		</>
		
					) : (
							<>
							<div>
							<div className='question-section'>
								<div className='question-count'>
									<span>Question {currentQuestion + 1}</span>/{questions.length}
								</div>
								<div className='question-text'>{questions[currentQuestion].questionText}</div>
							</div>
							<div className='answer-section'>
								{questions[currentQuestion].answerOptions.map((answerOption) => (
									<button className="answer_" onClick={() => handleAnswerOptionClick(answerOption.isCorrect, answerOption.answerText)}>{answerOption.answerText}</button>
								))}
							</div>
									</div>
						</>
					)}
		
				</div>
				{/* <div className ="bottomr"><img src='/logo.jpg' width="100px" alt=""></img></div> */}
				</>
				
		
			);

		}
	}



}

export default Quiz;
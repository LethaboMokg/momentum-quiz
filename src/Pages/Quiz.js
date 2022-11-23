import "./Quiz.css"
import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom"
import { getAuth } from "firebase/auth";
import { getDatabase, ref, set, get, child, DataSnapshot } from "firebase/database";
import firebase from './firebase'


let form = {}
let quizAnswers = {}


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

	// set(
	// 	ref(db, `Users/${uid}/`),
	// 	{
	// 		"name": userName
	// 	}
	// );

}

function Quiz() {

	let currentQuiz = 0;

	const dbRef = ref(getDatabase())


	const [error, setError] = useState(false)
	const [state, setState] = useState('');
	const [score, setScore] = useState(0);
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	
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
			return (<p>You already completed a quiz, your previous score was {score}</p>);
		} else {


			const questions = [
				{
					questionText: 'How do you ensure that your financial affairs are in order should you pass',
					answerOptions: [
						{ answerText: 'Budget', isCorrect: false },
						{ answerText: 'Estate Planning', isCorrect: false },
						{ answerText: 'Financial Advisor', isCorrect: true },
						{ answerText: 'Wealth Management', isCorrect: false },
					],
				},
				{
					questionText: 'How do we prepare ourselves for a time when we can no longer work',
					answerOptions: [
						{ answerText: 'Risk Management', isCorrect: false },
						{ answerText: 'Retirement Planning', isCorrect: true },
						{ answerText: 'Estate Planning', isCorrect: false },
						{ answerText: 'Wealth Manangement', isCorrect: false },
					],
				},
				{
					questionText: 'What do we call all the things that we own',
					answerOptions: [
						{ answerText: 'Assets', isCorrect: true },
						{ answerText: 'Budget', isCorrect: false },
						{ answerText: 'Gold', isCorrect: false },
						{ answerText: 'Investments', isCorrect: false },
					],
				},
				{
					questionText: 'How do we ensure that our money works for us',
					answerOptions: [
						{ answerText: 'Gold', isCorrect: false },
						{ answerText: 'Budget', isCorrect: false },
						{ answerText: 'Financial Plan', isCorrect: false },
						{ answerText: 'Investments', isCorrect: true },
					],
				},
				{
					questionText: 'What do we call the individual who advises clients on the best way to make money moves',
					answerOptions: [
						{ answerText: 'Banker', isCorrect: false },
						{ answerText: 'Insurance Agent', isCorrect: false },
						{ answerText: 'Investment Advisor', isCorrect: false },
						{ answerText: 'Financial Advisor', isCorrect: true },
					],
				},
				{
					questionText: 'What\'s a detailed plan of income and expenses expected over a certain period of time',
					answerOptions: [
						{ answerText: 'Budget', isCorrect: false },
						{ answerText: 'Financial Plan', isCorrect: true},
						{ answerText: 'Taxonomy', isCorrect: false },
						{ answerText: 'Investments', isCorrect: false },
					],
				},
				{
					questionText: 'Who analyzes clients\' overall financial situations',
					answerOptions: [
						{ answerText: 'Insurance Agent', isCorrect: false },
						{ answerText: 'Budget Analyst', isCorrect: false },
						{ answerText: 'Wealth Manager', isCorrect: false },
						{ answerText: 'Financial Planner', isCorrect: true },
					],
				},
				{
					questionText: 'Imagine that the interest rate on your savings account was 1% per year and inflation (the pace at which prices increase) was 2% per year. After 1 year, would you be able to buy more than, exactly the same as, or less than today with the money in this account',
					answerOptions: [
						{ answerText: 'More than today', isCorrect: false },
						{ answerText: 'Exactly the same as today', isCorrect: false },
						{ answerText: 'Less than today', isCorrect: true },
					],
				},
				{
					questionText: 'What do we call a  list of assets and liabilities at a specific point of time ',
					answerOptions: [
						{ answerText: 'Balance Sheet', isCorrect: true },
						{ answerText: 'Cash Flow', isCorrect: false },
						{ answerText: 'CRJ', isCorrect: false },
						{ answerText: 'Petty Cash', isCorrect: false },
					],
				},
				{
					questionText: 'Considering a long time period (for example 10 or 20 years), which asset described below normally gives the highest return',
					answerOptions: [
						{ answerText: 'Savings account', isCorrect: false },
						{ answerText: 'Government bonds', isCorrect: false },
						{ answerText: 'Shares', isCorrect: true },
					],
				},
				{
					questionText: 'When a person invests his or her money among different things (assets), does the risk of losing a lot of money increase, decrease or stay the same',
					answerOptions: [
						{ answerText: 'Increase', isCorrect: false },
						{ answerText: 'Decrease', isCorrect: true },
						{ answerText: 'Stay the same', isCorrect: false },
					],
				},
				{
					questionText: 'True or false, you can lose your money when investing',
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
					questionText: 'Which of these definitions are correct for Consumer Price Index (CPI)',
					answerOptions: [
						{ answerText: 'The amount of money that is needed to pay for or buy something', isCorrect: false },
						{ answerText: 'Shows how the average price level of all those goods and services (a fixed basket of goods and services) bought by a typical consumer or household changes over time', isCorrect: true },
					],
				},
			];
		
			
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
				console.log(questions[currentQuestion].questionText)
		
				const nextQuestion = currentQuestion + 1;
				if (nextQuestion < questions.length) {
					setCurrentQuestion(nextQuestion);
				} else {	
					console.log(quizAnswers)
					saveUserData(score);
					setShowScore(true);
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
							You have successfully completed our make your money move quiz.
		                    {<br />}
							{<br />}
						   
							<b>You scored {score} out of {questions.length}</b>

							{<br />}
							{<br />}
							This game was brought to you by Momentum and WeThinkCode_
							{<br />}
                            {<br />}

							<button className="answered here-btn" type="button"onClick={(e) => {e.preventDefault();window.location.href='https://www.momentum.co.za/planner/type/mfp'; }}> Connect to an Adviser</button>
						</div>
						
		
						<div><button className="answered" onClick={() => {navigate("/SocialShare");}}>Share</button></div>
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
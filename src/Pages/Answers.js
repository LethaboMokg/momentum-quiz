import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom"
import {getQuizAnswers, getAnswerQuiz} from "./globals"

function MakeQuizAnswers() {
    const navigate = useNavigate();


    return (
        <>
        <div className='app_'>
            <h3>See how you answered below</h3>
    <ol>
        {
            (getQuizAnswers() ? 
            getQuizAnswers().map(function(object, i){
                return (<>
                <li>{object.questionText}<ul>{
                    object.answerOptions.map(function(anAnswer, j){
                        if (anAnswer.isCorrect) {
                            return (<>
                            <li>Correct answer: {anAnswer.answerText}</li> 
                            <li>Your Answer: {getAnswerQuiz()[object.questionText]}</li>
                            </>);
                        }
                    })
                    }</ul>
                    </li>
                    </>
                )
            })
            : <p>Please complete the quiz before checking for answers</p>)
            
        }
        </ol>
        <div><button className="answered here-btn" onClick={()=> {navigate("/quiz")}}>Back</button></div>
        <div><button className="answered" onClick={() => {navigate("/SocialShare");}}>Share</button></div>
        <div><button className="answered here-btn" onClick={()=> {navigate("/Home")}}>Home</button></div>

        </div>
        </>
        );

}

export default MakeQuizAnswers;
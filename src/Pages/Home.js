import './App.css';
import React from 'react'
import { Navigate } from "react-router-dom";

function Home (){
  const [goToQuiz, setGoToQuiz] = React.useState(false);

  if (goToQuiz){
    return <Navigate to="/quiz"/>;
  }
  
  return(
    <div className="App">
    
        <img className='img' src='/SOS-Festival logo.png' />
    
      <p><b>Financial success</b> is within your control </p>
      <p>Welcome to make your money moves quiz brought to you by Momentum and our CSI success partner, We Think Code.</p> 
<p>This is a fun and easy quiz to ascertain how financially savvy you are. People with a score higher than 7 might stand a chance to win.</p>
      
      <div className='content'>
        <h1><i>Instructions:</i></h1>
        <ol>
          <li>Select only one of the available options.</li>
          <li>Answer all questions.</li>
        </ol>
      </div>

     
      <input type="checkbox" id="" name="terms" value="" required></input>
      <label for=""> I agree to all the <a href="https://www.momentum.co.za/momentum/support/terms-and-conditions">Terms and Conditions</a></label>
      <br/>
      <br/>
      <button className='start' id='submit' onClick={() => {setGoToQuiz(true);}} type='button'>Let the journey begin!</button>
      <br/>
      <br/>
    </div>
  );
}

export default Home;
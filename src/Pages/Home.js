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
      <p>Welcome to the Science of Success make your money moves quiz brought to you by Momentum and our CSI success partner, We Think Code.</p> 
<p>This is a fun and easy quiz to ascertain how financially savvy you are. People with a score higher than 7 might get a great prize from us.</p>
      
      {/* <p>Our financial advisers provide you with sound financial advice you can trust to help you on your personal journey and to make informed decisions about your money - so you can achieve your dreams and goals. Whether you’re moving up the corporate ladder or planning your retirement, Momentum’s certified financial planners can help you get there.</p> */}
     
      <div className='content'>
        <h1><i>Instructions:</i></h1>
        <ol>
          <li>Select only one of the available options.</li>
          <li>Answer all questions.</li>
        </ol>
      </div>

      
      {/* <br/> */}
      {/* <br/> */}
     
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
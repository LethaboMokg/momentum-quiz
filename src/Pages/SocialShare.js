import {
FacebookIcon,
  WhatsappIcon,
  TelegramIcon,
  LinkedinIcon,
  TwitterIcon,
  FacebookShareButton,
  WhatsappShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  TelegramShareButton,



} from "react-share";
import './SocialShare.css'
// import { Navigate} from "react-router-dom";
import React from 'react'
import firebase from './firebase'
// import React, { useState } from 'react';

function GoTothanks (){
    const [GoTothanks] = React.useState(false);
  
    // if (goTothanks){
    //   return <Navigate to="/Thanks"/>;
    // }
  }

function Share() {

  
    return (
        <div className = "app_">

       {<br />}
       {<br />}
       <p>Follow #SuccessIsAScience on our social media platforms for more tips, insights and tools that will empower you for success.</p>
        {<br />}
        {<br />}

        <div className="social-buttons">
        <FacebookShareButton url={"https://quiz-demo-eight.vercel.app/quiz"}>
         <FacebookIcon size={40} round={true}/>
        </FacebookShareButton>

        <WhatsappShareButton url={"https://quiz-demo-eight.vercel.app/quiz"}>
                 <WhatsappIcon size={40} round={true}/>
                </WhatsappShareButton>

        <LinkedinShareButton url={"https://quiz-demo-eight.vercel.app/quiz"}>
                                 <LinkedinIcon size={40} round={true}/>
         </LinkedinShareButton>
         <TwitterShareButton url={"https://quiz-demo-eight.vercel.app/quiz"}>
                                          <TwitterIcon size={40} round={true}/>
         </TwitterShareButton>
         <TelegramShareButton url={"https://quiz-demo-eight.vercel.app/quiz"}>
                                          <TelegramIcon size={40} round={true}/>
         </TelegramShareButton>
         
        </div>
        {<br/>}
          {<br/>}
          
          {<br/>}
         <button className='start' id='submit' onClick={() => {GoTothanks(true);}} type='button'>Next</button> 
         
        </div>


        );

}

export default Share;
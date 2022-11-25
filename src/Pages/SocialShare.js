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
import React from 'react'
import { useNavigate } from "react-router-dom"
import firebase from './firebase'

function Share() {

    const navigate = useNavigate();

  
    return (
        <div className = "app_">

       {<br />}
       {<br />}
       <p>The conversation continues on #SuccessIsAScience. Stay on our TL for more tips, insights and tools that will empower you for success. </p>
        {<br />}
        {<br />}

        <div className="social-buttons">
        <FacebookShareButton url={"https://momentum-quiz.vercel.app/"}>
         <FacebookIcon size={40} round={true}/>
        </FacebookShareButton>

        <WhatsappShareButton url={"https://momentum-quiz.vercel.app/"}>
                 <WhatsappIcon size={40} round={true}/>
                </WhatsappShareButton>

        <LinkedinShareButton url={"https://momentum-quiz.vercel.app/"}>
                                 <LinkedinIcon size={40} round={true}/>
         </LinkedinShareButton>
         <TwitterShareButton url={"https://momentum-quiz.vercel.app/"}>
                                          <TwitterIcon size={40} round={true}/>
         </TwitterShareButton>
         <TelegramShareButton url={"https://momentum-quiz.vercel.app/"}>
                                          <TelegramIcon size={40} round={true}/>
         </TelegramShareButton>
         
        </div>
        {<br/>}
          {<br/>}
          
          {<br/>}
         <button className='start_' id='submit' onClick={() => {navigate("/thanks");}} type='button'>Next</button> 
         
        </div>


        );

}

export default Share;
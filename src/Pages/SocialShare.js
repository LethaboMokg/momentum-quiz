import {
FacebookIcon,
  WhatsappIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
  FacebookShareButton,
  WhatsappShareButton,
  LinkedinShareButton,
  TwitterShareButton,

} from "react-share";
import './SocialShare.css'
import React, { useState } from 'react';


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
        </div>
        </div>


        );

}

export default Share;
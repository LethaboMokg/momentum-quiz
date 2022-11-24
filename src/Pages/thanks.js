import React from 'react'
// import { Navigate} from "react-router-dom";
import './thanks.css'
// import React, { useState } from 'react';

function goTothanks() {

    
    // const [goTothanks] = React.useState(false);

    // if(goTothanks) {
    //     return <Navigate to="/thanks" />;
    // }

 
    return (<>
            <div className ="topright"><img src='/RSImage.png'></img></div>
            <div className='app_'>
                <div className='login'>
                    <h2 className='title'></h2>
                    <form>
                        <div id='sign-in-button'></div>

                       <p>This quiz was brought to you by the Momentum Metropolitan Foundation and female coders  from our CSI partner, We Think Code. <a href="https://www.momentum.co.za/momentum/about-us/our-brand-story/momentum-futures/stories-of-success"> Click here</a> to read more about our involvement with the youth of South Africa</p><br/>
                      
                    </form>

                </div>
            </div>
            <div className ="bottomright"><img src='/logo.jpg' width="100px" alt=""></img></div>
        </>);
    

}



export default goTothanks
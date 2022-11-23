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
                    <h2 className='title'> Stories</h2>
                    <form>
                        <div id='sign-in-button'></div>

                       <p> This quiz was brought to you by Momentum and Wethinkcode_ students</p><br/>
                      
                    </form>

                </div>
            </div>
            <div className ="bottomright"><img src='/logo.jpg' width="100px" alt=""></img></div>
        </>);
    

}



export default goTothanks
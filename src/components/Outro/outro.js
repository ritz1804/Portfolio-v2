import React from "react";
import "./outro.css"

function Outro() {
    return (
        <div className = "outro" id = "outro">
            <h1 className = "text">
                <span>
                    I'm always
                </span>
            </h1>
            <h1 className = "text">    
                <span>
                    interested
                </span>
            </h1>
            <h1 className = "text">    
                <span>
                    about cool
                </span>
            </h1> 
            <h1 className = "text">   
                <span>
                    stuff
                    <em>.</em>
                </span>
            </h1>
            <br/>
            <h1 className = "text">    
                <span>
                    Are you
                </span>
            </h1>    
            <h1 className = "text">
                <span>
                    minding a
                </span>
            </h1>
            <h1 className = "text">
                <span>
                    project?
                </span>
            </h1>
            <h1 className = "text">
                <span className = "connect">
                    <a href = "mailto: subash.nehru123@gmail.com">Let's talk</a>
                    <em>.</em>
                </span>
            </h1>
        </div>
    );
}

export default Outro;
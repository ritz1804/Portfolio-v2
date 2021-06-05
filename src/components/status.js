import React from "react";
import "./status.css";

function Status() {
    return (
        <div className = "status">
            <div className = "status_info">
                <h2 className = "text">
                    <span>
                        Status
                    </span>
                </h2>  
                <h3 className = "text">  
                    <span className = "status_availability">
                        Available
                    </span>
                </h3>
            </div>
            <div className = "status_gif">
            </div>
        </div>
    );
}

export default Status;
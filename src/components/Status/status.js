import React, { useEffect } from "react";
import "./status.css";

import Aos from "aos";
import "aos/dist/aos.css";

function Status() {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    return (
        <div className = "status">
            <div data-aos = "fade-right" className = "status_info">
                <h1>Status</h1>
                <h1 className = "status_info_bottom">Available</h1>
            </div>
            <div data-aos = "fade-left" className = "status_gif"></div>
        </div>
    );
}

export default Status;
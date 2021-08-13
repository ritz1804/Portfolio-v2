import React , { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./outro.css"

function Outro() {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    return (
        <div className = "outro" id = "outro">
            <div data-aos = "fade-up">
                <h1>I'm always</h1>
            </div>
            <div data-aos = "fade-up">
                <h1>interested</h1>
            </div>
            <div data-aos = "fade-up">
                <h1>about cool</h1>
            </div>
            <div data-aos = "fade-up">
                <h1>stuff.</h1>
            </div>
            <div data-aos = "fade-up">
                <h1>Are you minding</h1>
            </div>
            <div data-aos = "fade-up">
                <h1>a project?</h1>
            </div>
            <div data-aos = "fade-up" className = "outro_talk">
                <h1 className = "text">
                    <span className = "connect">
                        <a href = "mailto: subash.nehru123@gmail.com">Let's talk</a>
                        <em>.</em>
                    </span>
                </h1>
            </div>
        </div>
    );
}

export default Outro;
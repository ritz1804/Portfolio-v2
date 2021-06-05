import React from "react";
import "./about.css";

function About() {
    return (
        <div className = "about" id = "about">
            <div className = "about_greet">
                <h1 className = "text">
                    <span>
                        Hello
                        <em>.</em>
                    </span>
                    <br />
                    <span>
                        I am Ritesh
                    </span>
                </h1>
            </div>

            <div className = "about_greet">
                <h2 className = "text">
                    <span>
                        Developer
                    </span>
                    <br />
                    <span>
                        UI/UX Designer
                    </span>
                    <br />
                    <span>
                        Freelancer
                    </span>
                </h2>    
            </div>

            <div className = "about_contact">
                <h4 className = "text">
                    <span>
                        CONTACT
                    </span>
                </h4>
            </div>

            <div class="circ">
                <p className = "text">
                    <span className = "about_showcreativity">
                        SHOW
                    </span>
                    <br/>
                    <span className = "about_showcreativity">
                        CREATIVITY
                    </span>
                </p>
            </div>

            <div className = "about_me">
                <h3 className = "text">
                    <span className = "about_me_info">
                        I am a developer and UX/UI designer based in India.
                    </span>
                    <br />
                    <span className = "about_me_info">
                        As a web developer, I strive to craft memorable experiences on the digital canvas.
                    </span>
                    <br />
                    <span className = "about_me_info">
                        I love to communicate with people through my work.
                    </span>
                    <br />
                    <span className = "about_me_info">
                        In my spare time, I love to watch anime. Your Name(Kimi No Nawa) is my favourite anime film 
                    </span>
                    <br />
                    <span className = "about_me_info">
                        and Attack on Titan(Shingeki no Kyojin) is my favourite anime series.
                    </span>
                    <br />
                </h3>
            </div>
        </div>
    );
}

export default About;
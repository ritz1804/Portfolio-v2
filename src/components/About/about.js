import React, { useEffect } from "react";
import "./about.css";

import Aos from "aos";
import "aos/dist/aos.css";
import logo from '../images/itstrue.gif';
import Header from "../Header/header";
import Role from "../Role/role";

function About() {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    return (
        <div className = "about" id = "about">
            <Header />
            <Role />

			<div class="section-header">
				<div class="section-header-container">
					<div class="section-title">about</div>
					<div class="section-order">/001</div>
				</div>
			</div>

			<div class="divider"></div>

            <div className = "about_me">
                <div className = "about_me_first">
                    <h1 data-aos = "fade-up">Nice to meet you</h1>
                    <p data-aos = "fade-up">I’m here to assist you. My feeling is you already know how crucial it is for your business to have a robust brand and website. Why? Because you’re very smart. That’s why. The good news is: you came to the right place. I’m awesome at doing those things. True story.</p>
                </div>
                <div className = "about_me_second"></div>
            </div>

            <div className = "about_funny">
                <div className = "about_funny_heading" data-aos = "fade-up"><h1>78% OF MY FRIENDS SAY I’M A GENIUS</h1></div>
                <div>
                    <div class="about_funny_item">
						<a class="about_funny_link" data-aos = "fade-right">The other 22% say I’m a <span>sexy genius.</span></a>
						<img class="about_funny_img" src={logo} />
					</div>
                </div>
            </div>
        </div>
    );
}

export default About;
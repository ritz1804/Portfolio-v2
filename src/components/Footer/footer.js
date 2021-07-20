import React from "react";
import "./footer.css";

function Footer() {
    return (
        <div>
            <footer>
                <div className = "footer_links">
                    <a href="https://github.com/ritz1804" target="_blank" rel="noopener noreferrer">Github</a>
                    <a href="https://www.linkedin.com/in/ritesh-nehru-ritz1804/" target="_blank" rel="noopener noreferrer">Linkedin</a>
                    <a href="https://www.codechef.com/users/ritz1804" target="_blank" rel="noopener noreferrer">Codechef</a>
                    <a href="https://www.behance.net/riteshnehru?tracking_source=search_users_recommended%7Critesh%20nehru" target="_blank" rel="noopener noreferrer">Behance</a>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
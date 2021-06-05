import React from "react";
import first from "./1.jpg";
import "./work.css";

function Work() {
    return (
        <div className = "work" id = "work">
            <h1 className = "text">
                <span>
                    Selected_
                </span>
                <br />
                <span>
                    works:
                </span>
            </h1>
            <div className = "container">
                <div className = "item1">
                    <h2 className = "text">
                        <span>
                            Paolo_
                        </span>
                        <br />
                        <span>
                            Fornasier
                        </span>
                    </h2>

                    <h3 className = "text">
                        <span className = "work_info">
                            The portfolio of Paolo Fornasier,
                        </span>
                        <br />
                        <span className = "work_info">
                            a young Italian musician
                        </span>
                    </h3>
                </div>
                <div className = "item2">
                </div>
            </div>

            <div className = "container">
                <div className = "item3">
                </div>
                <div className = "item4">
                    <h2 className = "text">
                        <span>
                            Barbara_
                        </span>
                        <br />
                        <span>
                            Scerbo
                        </span>
                    </h2>

                    <h3 className = "text">
                        <span className = "work_info">
                            The portfolio of Barbara Scerbo,
                        </span>
                        <br />
                        <span className = "work_info">
                            a young Sicilian designer
                        </span>
                    </h3>
                </div>
            </div>

            <div className = "container">
                <div className = "item5">
                    <h2 className = "text">
                        <span>
                            User_
                        </span>
                        <br />
                        <span>
                            bot
                        </span>
                    </h2>

                    <h3 className = "text">
                        <span className = "work_info">
                            Website of Userbot
                        </span>
                        <br />
                        <span className = "work_info">
                            Human + Artificial Intelligence
                        </span>
                    </h3>
                </div>
                <div className = "item6">
                </div>
            </div>

            <div className = "container">
                <div className = "item7">
                </div>
                <div className = "item8">
                    <h2 className = "text">
                        <span>
                            200_
                        </span>
                        <br />
                        <span>
                            Crowd
                        </span>
                    </h2>

                    <h3 className = "text">
                        <span className = "work_info">
                            UX/UI design of equity
                        </span>
                        <br />
                        <span className = "work_info">
                            Crowdfunding portal
                        </span>
                    </h3>
                </div>
            </div>
        </div>
    );
}

export default Work;
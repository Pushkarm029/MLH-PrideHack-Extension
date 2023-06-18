import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import "./app.css";
import { IoChevronForward } from "react-icons/io5";



export default function Guide() {
    return(
    <div className="guide">
        <div className="Header">
            <Link to="/calender">
                <div className="backarrow">
                    <IoIosArrowBack/>
                </div>
            </Link>
            <p>🏳️‍🌈Guide</p>
            <Link to="/locator">
                <div className="forwardarrow">
                    <IoChevronForward/>
                </div>
            </Link>
        </div>
        <div className="guideBody">
            <div className="guideBodyImage">
                <img src="https://www.dictionary.com/e/wp-content/uploads/2021/06/20210602_lgbtq_1000x700.png" alt="LGBTQ" />
            </div>
            <div className="guideBodyPO">
                <div className="guideBodyPOP">
                {/* target="_blank" */}
                    Defination
                </div>
                <div className="guideBodyPOP">
                    Terminology
                </div>
            </div>
            <div className="guideBodyPOT">
                <p>Choose Your Pronouns..</p>
            </div>
        </div>

    </div>
    );
}
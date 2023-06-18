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
            <p> 🏳️‍🌈 Guide</p>
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
                <a className="guideBodyPOP" href="https://en.wikipedia.org/wiki/LGBT" target="_blank">
                    Defination
                </a>
                <a className="guideBodyPOP" href="https://www.stonewall.org.uk/list-lgbtq-terms" target="_blank">
                    Terminology
                </a>
            </div>
            <a className="guideBodyPOT" href="https://uwm.edu/lgbtrc/support/gender-pronouns/" target="_blank">
                <span>Choose Your Pronouns!</span>
                <svg viewBox="-5 -5 110 110" preserveAspectRatio="none" aria-hidden="true">
                    <path d="M0,0 C0,0 100,0 100,0 C100,0 100,100 100,100 C100,100 0,100 0,100 C0,100 0,0 0,0"/>
                </svg>
            </a>
        </div>

    </div>
    );
}
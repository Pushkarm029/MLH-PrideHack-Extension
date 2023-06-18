import React from "react";
import "./app.css";
import {IoChevronForward} from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";
import {MdEmail} from "react-icons/md";
import {Link} from "react-router-dom";

export default function Helpline() {
    const iconpadding = '20px';
    const iconsize = '60';
    const iconcolor = 'black';
    const countryCode = 'IN';
    const countryFlag = `https://flagsapi.com/${countryCode}/flat/64.png`;
    return (
        <div className="Helpline">
            <div className="Header">
                <Link to="/resources">
                    <div className="backarrow">
                        <IoIosArrowBack/>
                    </div>
                </Link>
                <p>🏳️‍🌈 Helpline</p>
                <Link to="/calender">
                    <div className="forwardarrow">
                        <IoChevronForward/>
                    </div>
                </Link>
            </div>
            <div className="HelplineBody">
                <div className="HelplineBodyNumber">
                    <div className="countryFlagHelp">
                        <img src={countryFlag}/>
                    </div>
                    <p className="countryHelpPhoneNumber">9930095856</p>
                </div>
                <div className="HelplineBodyEmail">
                    <div className="emailIconHelp">
                        <MdEmail size= {iconsize} color={iconcolor} style={{ paddingLeft: iconpadding, paddingRight: iconpadding, paddingTop: iconpadding, paddingBottom: iconpadding }}/>
                    </div>
                    <p className="countryHelpEmailID">helpline@lgbt.foundation</p>
                </div>
            </div>
        </div>
    );
}
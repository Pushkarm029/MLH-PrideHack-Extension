import React from "react";
import 'react-calendar/dist/Calendar.css'
import Calendar from 'react-calendar'
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { IoChevronForward } from "react-icons/io5";


export default function Calender() {
    return(
        <div className="calender">
            <div className="Header">
                <Link to="/helpline">
                    <div className="backarrow">
                        <IoIosArrowBack/>
                    </div>
                </Link>
                <p>Calender</p>
                <Link to="/">
                    <div className="forwardarrow">
                        <IoChevronForward/>
                    </div>
                </Link>
            </div>
            <Calendar/>
        </div>
    );
}
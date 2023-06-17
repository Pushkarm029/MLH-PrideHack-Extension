import React from "react";
import { Link } from "react-router-dom";
import { SlCalender } from "react-icons/sl";
import { BsFillBookFill } from "react-icons/bs";
import { FaMap } from "react-icons/fa";
import { BsNewspaper } from "react-icons/bs";
import { GiMountaintop } from "react-icons/gi";
import "./app.css";

export default function Navigation() {
  const iconpadding = '4px';
  const iconsize = '15';
  const iconcolor = 'white';
  return (
    
    <div className="Navigation">
      <div className="navigationR">
        <Link to="/helpline">
          <div className="navigationIcons" >
            <div className="navHelpIcon">
              !  
            </div>
            <p>Help</p>
          </div>
        </Link>
        <Link to="/calender">
            <div className="navigationIcons">
            <SlCalender
              size= {iconsize}
              color={iconcolor}
              style={{
                paddingLeft: iconpadding,
                paddingRight: iconpadding,
                paddingTop: iconpadding,
                paddingBottom: iconpadding
              }}/>
              <p>Calender</p>
            </div>
        </Link>
        <Link to="/">
            <div className="navigationIcons">
              <BsFillBookFill  size= {iconsize} color={iconcolor} style={{ paddingLeft: iconpadding, paddingRight: iconpadding, paddingTop: iconpadding, paddingBottom: iconpadding }}/>
              <p>Guide</p>
            </div>
        </Link>
        <Link to="/locator">
            <div className="navigationIcons">
              <FaMap  size= {iconsize} color={iconcolor} style={{ paddingLeft: iconpadding, paddingRight: iconpadding, paddingTop: iconpadding, paddingBottom: iconpadding }}/>
              <p>Locator</p>
            </div>
        </Link>
        <Link to="/news">
            <div className="navigationIcons">
              <BsNewspaper  size= {iconsize} color={iconcolor} style={{ paddingLeft: iconpadding, paddingRight: iconpadding, paddingTop: iconpadding, paddingBottom: iconpadding }}/>
              <p>News</p>
            </div>
        </Link>
        <Link to="/resources/">
            <div className="navigationIcons">
                <GiMountaintop  size= {iconsize} color={iconcolor} style={{ paddingLeft: iconpadding, paddingRight: iconpadding, paddingTop: iconpadding, paddingBottom: iconpadding }}/>
                <p>Resources</p>
            </div>
        </Link>
      </div>
    </div>
  );
}

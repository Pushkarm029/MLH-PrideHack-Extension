import React from "react";
import { Link } from "react-router-dom";
import { SlCalender } from "react-icons/sl";
import { FaBook } from "react-icons/fa";
import { TbMapPinFilled } from "react-icons/tb";
import { MdNewspaper } from "react-icons/md";
import { MdStoreMallDirectory } from "react-icons/md";
import "./app.css";

export default function Navigation() {
  const iconpadding = '7px';
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
              <FaBook  size= {iconsize} color={iconcolor} style={{ paddingLeft: iconpadding, paddingRight: iconpadding, paddingTop: iconpadding, paddingBottom: iconpadding }}/>
              <p>Guide</p>
            </div>
        </Link>
        <Link to="/locator">
            <div className="navigationIcons">
              <TbMapPinFilled  size= {iconsize} color={iconcolor} style={{ paddingLeft: iconpadding, paddingRight: iconpadding, paddingTop: iconpadding, paddingBottom: iconpadding }}/>
              <p>Locator</p>
            </div>
        </Link>
        <Link to="/news">
            <div className="navigationIcons">
              <MdNewspaper  size= {iconsize} color={iconcolor} style={{ paddingLeft: iconpadding, paddingRight: iconpadding, paddingTop: iconpadding, paddingBottom: iconpadding }}/>
              <p>News</p>
            </div>
        </Link>
        <Link to="/resources/">
            <div className="navigationIcons">
                <MdStoreMallDirectory  size= {iconsize} color={iconcolor} style={{ paddingLeft: iconpadding, paddingRight: iconpadding, paddingTop: iconpadding, paddingBottom: iconpadding }}/>
                <p>Resources</p>
            </div>
        </Link>
      </div>
    </div>
  );
}

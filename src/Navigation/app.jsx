import React from "react";
import { Link } from "react-router-dom";
import { SlCalender } from "react-icons/sl";
import { BsFillBookFill } from "react-icons/bs";
import { FaMap } from "react-icons/fa";
import { BsNewspaper } from "react-icons/bs";
import { GiMountaintop } from "react-icons/gi";

export default function Navigation() {
  return (
    <div className="Navigation">
      <Link to="/calender">
        <div className="navigationIcons">
          🏳️‍🌈
        </div>
      </Link>
      <Link to="/calender">
        <div className="navigationIcons">
          <SlCalender/>
        </div>
      </Link>
      <Link to="/guide/">
        <div className="navigationIcons">
          <BsFillBookFill/>
        </div>
      </Link>
      <Link to="/locator/">
        <div className="navigationIcons">
          <FaMap/>
        </div>
      </Link>
      <Link to="/news/">
        <div className="navigationIcons">
          <BsNewspaper/>
        </div>
      </Link>
      <Link to="/resources/">
        <div className="navigationIcons">
            <GiMountaintop/>
        </div>
      </Link>
    </div>
  );
}

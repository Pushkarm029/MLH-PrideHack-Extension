import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { GiHealthNormal } from "react-icons/gi";
import { AiFillShop } from "react-icons/ai";
import { IoRestaurantSharp } from "react-icons/io5";
import { IoMdCafe } from "react-icons/io";
import "./app.css";
import { IoChevronForward } from "react-icons/io5";

export default function Locator() {
    const iconpadding = '6px';
    const iconsize = '25';
    const iconcolor = 'white';
    return(
        <div className="locator">
            <div className="Header">
                <Link to="/">
                    <div className="backarrow">
                        <IoIosArrowBack/>
                    </div>
                </Link>
                <p>Locator</p>
                <Link to="/news">
                    <div className="forwardarrow">
                        <IoChevronForward/>
                    </div>
                </Link>
            </div>
            <div className="locatorBody">
                <a href="https://www.google.com/maps/search/hospitals" className="locatorBodyTop1">
                    <div className="imagebglocator1"></div>
                    <div className="content">
                        <GiHealthNormal  size= {iconsize} color={iconcolor} style={{ paddingLeft: iconpadding, paddingRight: iconpadding, paddingTop: iconpadding, paddingBottom: iconpadding }}/>
                        HealthCare
                    </div>
                </a>
                <a href = "https://www.google.com/maps/search/lgbt+stores"  className="locatorBodyTop2">
                    <div className="imagebglocator2"></div>
                    <div className="content">
                        <AiFillShop  size= {iconsize} color={iconcolor} style={{ paddingLeft: iconpadding, paddingRight: iconpadding, paddingTop: iconpadding, paddingBottom: iconpadding }}/>
                        Shops
                    </div>
                </a>
                <a href = "https://www.google.com/maps/search/lgbt+restaurants" className="locatorBodyBottom1">
                    <div className="imagebglocator3"></div>
                    <div className="content">
                        <IoRestaurantSharp  size= {iconsize} color={iconcolor} style={{ paddingLeft: iconpadding, paddingRight: iconpadding, paddingTop: iconpadding, paddingBottom: iconpadding }}/>
                        Restaurant
                    </div>
                </a>
                <a variant="text" href = "https://www.google.com/maps/search/lgbt+cafes" className="locatorBodyBottom2">
                    <div className="imagebglocator4"></div>
                    <div className="content">
                        <IoMdCafe  size= {iconsize} color={iconcolor} style={{ paddingLeft: iconpadding, paddingRight: iconpadding, paddingTop: iconpadding, paddingBottom: iconpadding }}/>
                        Cafe
                    </div>
                </a>
            </div>
        </div>
    );
}
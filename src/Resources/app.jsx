import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import "./app.css";
import { IoChevronForward } from "react-icons/io5";

export default function Resources() {
  return (
    <div className="resources">
        <div className="Header">
            <Link to="/news">
                <div className="backarrow">
                    <IoIosArrowBack/>
                </div>
            </Link>
            <p>🏳️‍🌈 Resources</p>
            <Link to="/helpline">
                <div className="forwardarrow">
                    <IoChevronForward/>
                </div>
            </Link>
        </div>
        <div className="resourcesBodyBG">
            <div className="resourcesBody">
                <ul>
                    <li><a href = "https://advocatesforyouth.org/resources-tools/?_sft_audience=for-professionals" target="_blank">Advocates for Youth (AFY): LGBTQ Resources for Professionals</a></li>
                    <li><a href = "https://www.thetrevorproject.org/" target="_blank">Creating Safer Spaces in Schools for LGBTQ Youth | The Trevor Project</a></li>
                    <li><a href = "https://www.glsen.org/resources/educator-resources" target="_blank">Educator Resources | GLSEN</a></li>
                    <li><a href = "https://gsanetwork.org/resources/10-steps-for-starting-a-gsa/?civicrm_install_type=wordpress" target="_blank">Genders & Sexualities Alliance Network</a></li>
                    <li><a href = " https://www.qchatspace.org/" target="_blank">Q Chat Space</a></li>
                    <li><a href = "http://www.stopbullying.gov/at-risk/groups/lgbt/index.html" target="_blank">StopBullying.gov: Information for LGBTQ Youth</a></li>
                    <li><a href = "https://www.nea.org/professional-excellence/professional-learning/resources/supporting-lgbtq-students-micro-0" target="_blank">Supporting LGBTQ+ Students Micro-credentials | National Education Foundation</a></li>
                    <li><a href = "http://www.thetrevorproject.org/section/education-training-for-adults" target="_blank">The Trevor Project </a></li>
                </ul>
            </div>
        </div>
    </div>
  );
}

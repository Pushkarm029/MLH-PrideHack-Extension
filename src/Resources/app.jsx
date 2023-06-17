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
            <p>Resources</p>
            <Link to="/helpline">
                <div className="forwardarrow">
                    <IoChevronForward/>
                </div>
            </Link>
      </div>
        <div className="resourcesBody">
            <ul>
                <li><a href = "https://advocatesforyouth.org/resources-tools/?_sft_audience=for-professionals">Advocates for Youth (AFY): LGBTQ Resources for Professionals</a></li>
                <li><a href = "https://www.thetrevorproject.org/">Creating Safer Spaces in Schools for LGBTQ Youth | The Trevor Project</a></li>
                <li><a href = "https://www.glsen.org/resources/educator-resources">Educator Resources | GLSEN</a></li>
                <li><a href = "https://gsanetwork.org/resources/10-steps-for-starting-a-gsa/?civicrm_install_type=wordpress">Genders & Sexualities Alliance Network</a></li>
                <li><a href = " https://www.qchatspace.org/">Q Chat Space</a></li>
                <li><a href = "http://www.stopbullying.gov/at-risk/groups/lgbt/index.html">StopBullying.gov: Information for LGBTQ Youth</a></li>
                <li><a href = "https://www.nea.org/professional-excellence/professional-learning/resources/supporting-lgbtq-students-micro-0">Supporting LGBTQ+ Students Micro-credentials | National Education Foundation</a></li>
                <li><a href = "http://www.thetrevorproject.org/section/education-training-for-adults">The Trevor Project </a></li>
            </ul>
        </div>
    </div>
  );
}

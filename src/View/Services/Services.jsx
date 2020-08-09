import React from "react";
import "./Services.scss";
import monitor from "../../Images/monitor.svg";
import box from "../../Images/box.svg";
import pen from "../../Images/pen.svg";

export default function Services() {
  return (
    <div className="Services">
      <div className="display">
        Currently i have no project project ideas include
        <ul>
          <li>mango.com: e-commerce</li>
          <li>a site for music spotify api </li>
          <li>a site for job application</li>
          <li>a property site </li>
        </ul>
      </div>
      <div className="downBanner"></div>
      <div className="skillSet">
        <div className="singleSkill">
          {/* <div className="push"></div> */}
          <div className="under">
            {/* <img className="skillLogo" src={box} /> */}
            <div>
              <p className="skill">Product Designer.</p>
              <p className="project">38 Projects</p>
            </div>
          </div>
        </div>
        <div className="skillSpacer"></div>
        <div className="singleSkill">
          <div className="push"></div>
          <div className="under">
            {/* <img className="skillLogo" src={pen} /> */}
            <div>
              <p className="skill">Branding Designer.</p>
              <p className="project">38 Projects</p>
            </div>
          </div>
        </div>
        <div className="skillSpacer"></div>

        <div className="singleSkill">
          <div className="push"></div>
          <div className="under">
            {/* <img className="skillLogo" src={monitor} /> */}
            <div>
              <p className="skill">Full Stack Developer.</p>
              <p className="project">38 Projects</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

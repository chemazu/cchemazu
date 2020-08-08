import React from "react";
import "./Services.scss";
import monitor from "../../Images/monitor.svg";

export default function Services() {
  return (
    <div className="Services">
      <div className="displayBlock">Display</div>
      <div className="positionBlock">
        <div className="position">
          <img src={monitor} />
          <p className="skill">
            Fullstack <br />
            Developer <p className="skillSubset">125 Projects"</p>
          </p>
        </div>
        <div className="position">
          <img src={monitor} />
          <p className="skill">
            Fullstack <br />
            Developer <p className="skillSubset">125 Projects"</p>
          </p>
        </div>
        <div className="position">
          <img src={monitor} />
          <p className="skill">
            Fullstack <br />
            Developer <p className="skillSubset">125 Projects"</p>
          </p>
        </div>
      </div>
    </div>
  );
}

{
  /* <div className="position">
          <div className="r">
            
            <div>
              <h4 className="bioHeading">
                FullStack <br />
                Developer <p className="skillSubet">125 Projects"</p>
                <p className="introduction"> 124 Project</p>
              </h4>
            </div>
          </div>
        </div> */
}

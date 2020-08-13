import React, { Component } from "react";
import "./Services.scss";
import MiniView from "../MiniView/MiniView";
import monitor from "../../Images/monitor.svg";
import box from "../../Images/box.svg";
import pen from "../../Images/pen.svg";

export class Services extends Component {
  constructor() {
    super();
    this.state = {
      Product: true,
      Branding: false,
      Developer: false,
    };
  }
  showProduct = () => {
    this.setState({ Product: true, Branding: false, Developer: false });
    console.log(this.state);
  };
  showBranding = () => {
    this.setState({ Branding: true, Product: false, Developer: false });
    console.log(this.state);
  };
  showDeveloper = () => {
    this.setState({ Developer: true, Branding: false, Product: false });
    console.log(this.state);
  };
  render() {
    const { Product, Branding, Developer } = this.state;
    return (
      <div className="Services">
        <div className="display">
          {/* <MiniView display="Product" /> */}
          {Product ? <MiniView display="Product" /> : null}
          {Branding ? <MiniView display="Branding" /> : null}
          {Developer ? <MiniView display="Developer" /> : null}
        </div>
        <div className="downBanner"></div>
        <div className="skillSet">
          <div className="singleSkill" onClick={this.showProduct}>
            {/* <div className="push"></div> */}
            <div className="under">
              <img className="skillLogo" src={box} />
              <div>
                <p className="skill">Product Designer.</p>
                <p className="project">38 Projects</p>
              </div>
            </div>
          </div>
          <div className="skillSpacer"></div>
          <div className="singleSkill" onClick={this.showBranding}>
            <div className="push"></div>
            <div className="under">
              <img className="skillLogo" src={pen} />
              <div>
                <p className="skill">Branding Designer.</p>
                <p className="project">38 Projects</p>
              </div>
            </div>
          </div>
          <div className="skillSpacer"></div>
          <div className="singleSkill" onClick={this.showDeveloper}>
            <div className="push"></div>
            <div className="under">
              <img className="skillLogo" src={monitor} />
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
}

export default Services;

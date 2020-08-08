import React, { Component } from "react";
import "./About.scss";
import linkedin from "../../Images/linkedin.svg";
import github from "../../Images/github.svg";
import codepen from "../../Images/codepen.svg";
import MiniView from "../MiniView/MiniView";
import C from "../../Images/C.png";

export class About extends Component {
  constructor() {
    super();
    this.state = {
      Services: true,
      Work: false,
      Contact: false,
    };
  }
  showService = () => {
    this.setState({
      Services: true,
      Work: false,
      Contact: false,
    });
  };
  showWork = () => {
    this.setState({
      Services: false,
      Work: true,
      Contact: false,
    });
  };
  showContact = () => {
    this.setState({
      Services: false,
      Work: false,
      Contact: true,
    });
  };
  render() {
    const { Services, Work, Contact } = this.state;

    return (
      <div className="About">
        <div className="topBar">
          <div className="topBarFirst">
            <h2>Chemazu</h2>
            <h2>Chukwuemeka.</h2>
            <hr />
            <div className="socialsWrapper">
              <img src={linkedin} alt="@cchemazu" className="socials" />
              <img src={github} alt="@cchemazu" className="socials" />
              <img src={codepen} alt="@cchemazu" className="socials" />
            </div>
          </div>
          <div className="topBarSecond">
            <div className="topBarSecond-first">
              {/* <p onClick={setMiniView("Services")}>Services</p>
                    <p onClick={setMiniView("Work")}>Work</p>
                    <p onClick={setMiniView("Contact")}>Contact</p> */}
              <p onClick={this.showService}>Services</p>
              <p onClick={this.showWork}>Work</p>
              <p onClick={this.showContact}>Contact</p>
            </div>
            {Services ? <MiniView display="Services" /> : null}
            {Work ? <MiniView display="Work" /> : null}
            {Contact ? <MiniView display="Contact" /> : null}
          </div>
        </div>
      </div>
    );
  }
}

export default About;

import React from "react";
import { Link } from "react-router-dom";
import arrow from "../../Images/right-arrow.svg";
import "./MiniView.scss";
import PortfolioCard from "../../Custom/PortfolioCard/PortfolioCard";

export default function MiniView({ display }) {
  switch (display) {
    case "Services":
      return (
        <div className="bio">
          <p className="introduction">-Introduction</p>
          <h3 className="bioHeading">
            Software Developer and Product Designer{" "}
          </h3>
          <h3>based in Lagos, Nigeria.</h3>
          <p className="introduction" id="paragraph">
            An Asute web developer that prides himself for being self aware, and
            puts in conscious effort in getting better as a person and in his
            craft, when he isnt coding ,he can be found working out, getting
            them gainz.
          </p>
          <div className="learnMore">
            <Link to="/services">
              <div className="text">
                <p>my story</p>
                <img src={arrow} alt="learn more" />
              </div>
            </Link>
            <hr />
          </div>
        </div>
      );
      break;
    case "Work":
      return (
        <div className="bio">
          <p className="introduction">-Portfolio</p>
          <h3 className="bioHeading">Creative Works</h3>
          <p className="introduction" id="paragraph">
            All Creative work carfully curated and presented, for aesthics and
            functionality. You cant use up creativity,the more you use, the more
            you have in your significant life
          </p>
          <div className="portfolioCardWrapper">
            <PortfolioCard content={"Expedicom"} />
            {/* <PortfolioCard content={"Rotimi"} />
            <PortfolioCard content={"Medgric"} /> */}
          </div>

          <div className="learnMore">
            <div className="text">
              <p>explore more</p>
              <img src={arrow} alt="learn more" />
            </div>
            <hr />
          </div>
        </div>
      );
      break;
    case "Contact":
      return (
        <div className="bio">
          <p className="introduction">-Contact</p>
          <h3 className="bioHeading">Any Type of Query or Disscussion</h3>
          <p className="introduction" id="paragraph">
            But I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account of the system, and expound the actual teachings.
          </p>
          <div className="learnMore">
            <div className="text">
              <p>say hi!</p>
              <img src={arrow} alt="learn more" />
            </div>
            <hr />
          </div>
        </div>
      );
      break;
    default:
      break;
  }
}

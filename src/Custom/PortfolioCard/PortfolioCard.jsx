import React from "react";
import "./PortfolioCard.scss";

export default function PortfolioCard({ content }) {
  return (
    <div className="PortfolioCard">
      <h2>{"01"}</h2>
      {/* <div className="cardContent"> */}
      <p>
        {
          (content,
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, ad minim veniam")
        }
      </p>
      View<p className="button1">View</p>
      {/* </div> */}
    </div>
  );
}

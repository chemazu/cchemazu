import React from "react";
import "./PortfolioCard.scss";

export default function PortfolioCard({ content }) {
  return (
    <div className="PortfolioCard">
      <div className="cardContent">
        <h3>{content}</h3>
        <button>View</button>
      </div>
    </div>
  );
}

import React from "react";
import MiniView from "../../View/MiniView/MiniView";

export default function BetterMiniView({ action }) {
  return (
    <div>
      <MiniView display={action} />
    </div>
  );
}

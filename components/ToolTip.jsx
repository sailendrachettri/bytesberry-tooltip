import React from "react";
import "./ToolTip.css";

const ToolTip = ({
  hoverMessage = "Your hover message.",
  text = "This is hover text",
  position = "top",
  tooltipColor = "blueviolet",
  hoverMessageColor = "#fff",
  backgroundColor = "#333",
  arrowColor = "#333",
}) => {
  const tooltipStyle = {
    color: tooltipColor,
  };

  const hoverMessageStyle = {
    backgroundColor: backgroundColor,
    color: hoverMessageColor,
  };

  return (
    <div className="tooltip" style={tooltipStyle}>
      {text}
      <span
        className={`tooltiptext ${position}`}
        style={{
          ...hoverMessageStyle,
          "--arrow-color": arrowColor, // Use inline CSS variable for arrow color
        }}
      >
        {hoverMessage}
      </span>
    </div>
  );
};

export default ToolTip;

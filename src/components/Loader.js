import React from "react";

export default () => (
  <svg
    style={{
      margin: "auto",
      background: "none",
      display: "block",
      shapeRendering: "auto"
    }}
    width="32px"
    height="32px"
    viewBox="0 0 100 100"
    preserveAspectRatio="xMidYMid"
  >
    <circle
      cx="50"
      cy="50"
      fill="none"
      stroke="#aaff67"
      strokeWidth="10"
      r="35"
      strokeDasharray="164.93361431346415 56.97787143782138"
      transform="rotate(341.553 50.0001 50)"
    >
      <animateTransform
        attributeName="transform"
        type="rotate"
        repeatCount="indefinite"
        dur="1s"
        values="0 50 50;360 50 50"
        keyTimes="0;1"
      ></animateTransform>
    </circle>
  </svg>
);

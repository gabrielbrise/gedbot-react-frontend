import React from "react";
import styled from "styled-components";

const DrawingLines = () => {
  return (
    <Container>
      <LeftLines id="left" />
      <RightLines id="right" />
    </Container>
  );
};

export default DrawingLines;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  z-index: -1;
  svg {
    position: absolute;
    opacity: 0.4;
    top: -35vh;
    stroke: #aaff67;
    stroke-width: 1px;
    stroke-dasharray: 2000;
    stroke-dashoffset: 4000;
    animation: dash 8s ease alternate-reverse;
    animation-iteration-count: infinite;

    @keyframes dash {
      0% {
        stroke-dashoffset: 2000;
      }
      50% {
        stroke-dashoffset: 4000;
      }
      100% {
        stroke-dasharray: 2000;
      }
    }

    &#left {
      left: 0;
      animation-delay: 4s;
    }
    &#right {
      right: 0;
    }
  }
`;

const LeftLines = () => (
  <svg
    id="left"
    width="35vw"
    height="auto"
    viewBox="0 0 900 400"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M0,665h51.5v-134.5h47v75h66.5v-163h-113.5v-160h132.5v34h115.5v-109h-186v-83.5h248v-60h-87.5v-64" />
  </svg>
);

const RightLines = () => (
  <svg
    id="right"
    width="35vw"
    height="auto"
    viewBox="0 0 600 300"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M203.836,0v81.5h-202.836v49h340.746v81.5h70.747v-175.5h51.94v94h78.358v156.5h-78.358v113h-38.508v34.5h158.956v70.5h46.119" />
  </svg>
);

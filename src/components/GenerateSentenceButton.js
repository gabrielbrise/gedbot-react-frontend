import React from "react";
import IconMD from "./IconMD";
import styled from "styled-components";

const GenerateSentenceButton = () => (
  <Container className="MH12 Pointer">
    <IconMD name="refresh" size={2} />
  </Container>
);

export default GenerateSentenceButton;

const Container = styled.div`
  width: 48px;
  height: 32px;
  background-color: #aaff67;
  border-radius: 30px;
  border: 2px solid #aaff67;
  transition: all 0.2s ease;
  i {
    z-index: 2;
    color: #282c34;
    transition: all 0.2s ease;
  }
  :hover {
    i {
      transform: rotate(90deg);
      color: #aaff67;
    }
    background-color: #282c34;
    border: 2px solid #aaff67;
  }
`;

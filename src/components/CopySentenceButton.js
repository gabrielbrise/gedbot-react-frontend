import React from "react";
import IconMD from "./IconMD";
import styled from "styled-components";

const CopyButtonSentence = ({ onClick }) => (
  <Container onClick={onClick}>
    <IconMD name="copy" size={1} />
  </Container>
);

export default CopyButtonSentence;

const Container = styled.span`
  display: inline-block;
  width: 40px;
  height: 36px;
  background-color: transparent;
  border-radius: 30px;
  border: 1px solid #ccc;
  line-height: 38px;
  transition: all 0.2s ease;
  cursor: pointer;
  i {
    z-index: 2;
    color: #ccc;
    font-size: 20px;
  }
  :hover {
    i {
      transform: scale(1.1);
      color: #282c34;
    }
    background-color: #ccc;
  }
`;

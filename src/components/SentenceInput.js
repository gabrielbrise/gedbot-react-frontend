import React from "react";
import styled from "styled-components";

const SentenceInput = ({ label, input, size }) => (
  <Container className="MH12">
    <div>{label}</div>
    <input className="ColorWhite FS2x MV12 TextCenter" style={{ width: size }}>
      {input}
    </input>
  </Container>
);

export default SentenceInput;

const Container = styled.div`
  input {
    background-color: transparent;
    border: none;
    border-bottom: 1px solid;
  }
`;

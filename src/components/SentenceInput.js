import React from "react";
import styled from "styled-components";

const SentenceInput = ({ label, input, size, onChange, value }) => (
  <Container className="MH12 PB24">
    <div className="TextBold">{label}</div>
    <input
      onChange={onChange}
      className="ColorWhite FS2x MV12 TextCenter"
      style={{ "--input-width": size }}
      value={value}
    >
      {input}
    </input>
  </Container>
);

export default SentenceInput;

const Container = styled.div`
  max-width: 90vw;
  input {
    background-color: transparent;
    border: none;
    border-bottom: 1px solid;
    width: 80vw;
  }
  @media (min-width: 768px) {
    input {
      width: var(--input-width);
    }
  }
`;

import React from "react";
import styled from "styled-components";

const SentenceResult = ({ sentence, id }) => (
  <Container className="FS2x PV16 PH8" id={id}>
    {sentence}
  </Container>
);

export default SentenceResult;

const Container = styled.p`
  @media (max-width: 959px) {
    min-height: 80px;
    vertical-align: middle;
    display: flex;
    align-items: center;
    padding: 12px;
  }
`;

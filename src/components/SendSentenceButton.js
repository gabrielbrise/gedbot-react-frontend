import React from "react";
import styled from "styled-components";

const GenerateSentenceButton = text => (
  <Container
    type="submit"
    className="Montserrat FS2x TextBold MH12 Pointer Flex JCCenter AICenter MV12"
  >
    ENVIAR
  </Container>
);

export default GenerateSentenceButton;

const Container = styled.button`
  height: 32px;
  width: min-content;
  padding: 4px 12px;
  background-color: #aaff67;
  border-radius: 30px;
  border: 2px solid #aaff67;
  transition: all 0.2s ease;
  color: #282c34;

  :hover {
    color: #aaff67;
    background-color: #282c34;
    border: 2px solid #aaff67;
  }
`;

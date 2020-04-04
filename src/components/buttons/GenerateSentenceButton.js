import React from "react";
import styled from "styled-components";
import Button from "../buttons/Button";
import IconMD from "../IconMD";
import Loader from "../Loader";
const GenerateSentenceButton = ({ onClick, fetched }) => (
  <Container
    onClick={fetched ? onClick : null}
    disabled={!fetched}
    backgroundColor={fetched ? "#aaff67" : "#282c34"}
    color={fetched ? "#282c34" : "#aaff67"}
    inverted={!fetched}
  >
    {fetched && <IconMD name="refresh" size={2} style={{ fontSize: 28 }} />}
    {!fetched && (
      <div className="Loader MV12">
        <Loader />
      </div>
    )}
  </Container>
);

export default GenerateSentenceButton;

const Container = styled(Button)`
  border-width: 1px;
  max-width: 44px;
  .Loader {
    min-width: 20px;
    min-height: 32px;
    position: relative;
    svg {
      left: -2px;
      top: -13px;
      width: 24px;
      height: 24px;
      position: absolute;
    }
  }
  i {
    line-height: 0;
    transition: transform 0.2s ease;
  }
  &:hover {
    i {
      transform: rotateZ(90deg);
    }
  }
`;

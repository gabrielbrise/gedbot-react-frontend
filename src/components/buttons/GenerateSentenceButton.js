import React from "react";
import styled from "styled-components";
import Button from "../buttons/Button";
import IconMD from "../IconMD";
import Loader from "../Loader";

const GenerateSentenceButton = ({ onClick, fetched }) => {
  if (!fetched)
    return (
      <div className="MV12" style={{ width: 50, height: 32, marginRight: 12 }}>
        <Loader />
      </div>
    );
  return (
    <Container onClick={onClick}>
      <IconMD name="refresh" size={2} style={{ fontSize: 28 }} />
    </Container>
  );
};

export default GenerateSentenceButton;

const Container = styled(Button)`
  i {
    line-height: 0;
    transition: transform 0.2s ease;
  }
  :hover {
    i {
      transform: rotateZ(90deg);
    }
  }
`;

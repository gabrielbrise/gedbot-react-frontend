import React from "react";
import IconMD from "./IconMD";
import styled from "styled-components";

const VotingCard = ({ score, sentence }) => (
  <Container className="Flex FlexRow AICenter">
    <div className="Flex FlexColumn AICenter JCCenter">
      <IconMD className="VotingArrow" name="chevron-up" size={2} />
      <span>{score}</span>
      <IconMD className="VotingArrow" name="chevron-down" size={2} />
    </div>
    <p className="SentenceBox Flex AICenter JCCenter">{sentence}</p>
  </Container>
);

export default VotingCard;

const Container = styled.div`
  max-width: 320px;
  .VotingArrow {
    i {
      color: red;
      &:hover {
        color: white;
      }
    }
  }
  .SentenceBox {
    min-width: 280px;
    margin-left: 12px;
    min-height: 60px;
    border: 1px solid #ababab;
    background-color: transparent;
  }
`;

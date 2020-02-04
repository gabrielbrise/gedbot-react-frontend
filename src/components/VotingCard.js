import React, { Component } from "react";
import IconMD from "./IconMD";
import styled from "styled-components";

export default class VotingCard extends Component {
  state = {
    isVoted: false,
    isPositive: undefined,
    score: this.props.score
  };
  sendVote = isPositive => {
    if (!this.state.isVoted) {
      const options = {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ isPositive })
      };
      fetch(
        `${process.env.REACT_APP_API_URL}/api/v1/sentences/${this.props.id}/vote`,
        options
      );
      this.setState({
        isVoted: true,
        score: isPositive ? this.state.score + 1 : this.state.score - 1
      });
    }
  };

  render = () => (
    <Container className="Flex FlexRow AICenter">
      <div className="Flex FlexColumn AICenter JCCenter">
        <IconMD
          className="VotingArrow Pointer"
          name="chevron-up"
          size={2}
          onClick={() => this.sendVote(true)}
        />
        <span>{this.state.score}</span>
        <IconMD
          className="VotingArrow Pointer"
          name="chevron-down"
          size={2}
          onClick={() => this.sendVote(false)}
        />
      </div>
      <p className="SentenceBox Flex AICenter JCCenter">
        {this.props.sentence}
      </p>
    </Container>
  );
}

const Container = styled.div`
  max-width: 320px;
  .VotingArrow {
    color: #adadad;
    &:hover {
      color: white;
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

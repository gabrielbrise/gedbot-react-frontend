import React, { Component } from "react";
import IconMD from "./IconMD";
import styled from "styled-components";
import classNames from "classnames";

export default class VotingCard extends Component {
  state = {
    isVoted: this.props.isVoted,
    isPositive: this.props.isPositive,
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
      ).catch(err => console.error(err));
      this.setState({
        isVoted: true,
        score: isPositive ? this.state.score + 1 : this.state.score - 1,
        isPositive
      });
    }
  };

  render = () => (
    <Container className="Flex FlexRow AICenter">
      <div className="Flex FlexColumn AICenter JCCenter">
        <IconMD
          className={classNames("VotingArrow Pointer", {
            PositiveVote: this.state.isVoted && this.state.isPositive
          })}
          name="chevron-up"
          size={2}
          onClick={() => this.sendVote(true)}
        />
        <span
          className={classNames({
            PositiveVote: this.state.isVoted && this.state.isPositive,
            NegativeVote: this.state.isVoted && !this.state.isPositive
          })}
        >
          {this.state.score}
        </span>
        <IconMD
          className={classNames("VotingArrow Pointer", {
            NegativeVote: this.state.isVoted && !this.state.isPositive
          })}
          name="chevron-down"
          size={2}
          onClick={() => this.sendVote(false)}
        />
      </div>
      <p className="SentenceBox Flex AICenter JCCenter PH8">
        {this.props.sentence}
      </p>
    </Container>
  );
}

const Container = styled.div`
  max-width: 300px;
  .VotingArrow {
    color: #adadad;
    &:hover {
      color: white;
    }
  }
  .PositiveVote {
    color: #aaff67;
  }
  .NegativeVote {
    color: red;
  }
  .SentenceBox {
    min-width: 280px;
    margin-left: 12px;
    min-height: 60px;
    border: 1px solid #ababab;
    background-color: transparent;
  }
`;

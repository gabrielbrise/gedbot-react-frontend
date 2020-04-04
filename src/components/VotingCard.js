import React, { Component } from "react";
import IconMD from "./IconMD";
import styled from "styled-components";
import classNames from "classnames";

export default class VotingCard extends Component {
  state = {
    isVoted: this.props.isVoted,
    isPositive: this.props.isPositive,
    score: this.props.score,
  };

  sendVote = (isPositive) => {
    if (!this.state.isVoted) {
      const options = {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ isPositive }),
      };
      fetch(
        `${process.env.REACT_APP_API_URL}/api/v1/sentences/${this.props.id}/vote`,
        options
      ).catch((err) => console.error(err));
      this.setState({
        isVoted: true,
        score: isPositive ? this.state.score + 1 : this.state.score - 1,
        isPositive,
      });
    }
  };

  render = () => (
    <Container className="Flex FlexRow AICenter MV12">
      <div className="Flex FlexColumn AICenter JCCenter Vote">
        <IconMD
          className={classNames("VotingArrow Pointer", {
            PositiveVote: this.state.isVoted && this.state.isPositive,
          })}
          name="thumb-up"
          size={1}
          onClick={() => this.sendVote(true)}
          style={{ top: 0 }}
        />
        <span
          className={classNames({
            PositiveVote: this.state.isVoted && this.state.isPositive,
            NegativeVote: this.state.isVoted && !this.state.isPositive,
          })}
        >
          {this.state.score}
        </span>
        <IconMD
          className={classNames("VotingArrow Pointer", {
            NegativeVote: this.state.isVoted && !this.state.isPositive,
          })}
          name="thumb-down"
          size={1}
          onClick={() => this.sendVote(false)}
          style={{ bottom: 0 }}
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
  .Vote {
    padding-right: 8px;
    position: relative;
    height: 60px;
    min-width: 24px;
  }
  .VotingArrow {
    color: #5b5b5b;
    @media (min-width: 960px) {
      &:hover {
        color: white;
      }
    }
    position: absolute;
  }
  .PositiveVote {
    top: 0;
    color: #aaff67;
  }
  .NegativeVote {
    bottom: 0;
    color: red;
  }
  .SentenceBox {
    min-width: 280px;
    min-height: 60px;
    padding: 4px;
    border: 1px solid #5b5b5b;
    background-color: transparent;
  }
`;

import React, { Component } from "react";
import SentenceResult from "../SentenceResult";
import IconMD from "../IconMD";
import Button from "../Button";
import generatePhrase from "../../helpers/generatePhrase";
import copyText from "../../helpers/copyText";
import styled from "styled-components";
import Loader from "../Loader";

export default class SentenceGeneratorSection extends Component {
  state = {
    sentence:
      "hey guys, meu chuveiro estragou e estou envolvido com isso, divirtam-se"
  };

  render = () => (
    <Container className="Flex AICenter FlexColumn PT8">
      <SentenceResult sentence={this.state.sentence} id="resultado" />
      <div className="Flex FlexRow PB24">
        <GenerateSentenceButton
          onClick={() =>
            this.props.fetched &&
            this.setState({ sentence: generatePhrase(this.props.sentences) })
          }
          fetched={this.props.fetched}
        />
        <CopySentenceButton onClick={() => copyText(this.state.sentence)} />
      </div>
    </Container>
  );
}

const GenerateSentenceButton = ({ onClick, fetched }) => {
  if (!fetched)
    return (
      <div className="MV12" style={{ width: 50, height: 32, marginRight: 12 }}>
        <Loader />
      </div>
    );
  return (
    <Button onClick={onClick} className="RefreshIcon">
      <IconMD name="refresh" size={2} style={{ fontSize: 28 }} />
    </Button>
  );
};

const CopySentenceButton = ({ onClick }) => (
  <Button
    onClick={onClick}
    backgroundColor="#282c34"
    color="#ededed"
    inverted
    style={{ borderWidth: 1 }}
  >
    <IconMD name="copy" size={1} style={{ fontSize: 18 }} />
  </Button>
);

const Container = styled.div`
  .RefreshIcon {
    i {
      line-height: 0;
      transition: transform 0.2s ease;
    }
    :hover {
      i {
        transform: rotateZ(90deg);
      }
    }
  }
`;

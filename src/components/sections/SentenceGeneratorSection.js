import React, { Component } from "react";
import SentenceResult from "../SentenceResult";
import GenerateSentenceButton from "../GenerateSentenceButton";
import CopySentenceButton from "../CopySentenceButton";

export default class SentenceGeneratorSection extends Component {
  state = {
    sentence:
      "hey guys, meu chuveiro estragou e estou envolvido com isso, divirtam-se"
  };
  render = () => (
    <div className="Flex AICenter FlexColumn">
      <SentenceResult sentence={this.state.sentence} />
      <div className="Flex FlexRow PB24">
        <GenerateSentenceButton
          onClick={() =>
            this.setState({ sentence: generatePhrase(this.props.sentences) })
          }
        />
        <CopySentenceButton />
      </div>
    </div>
  );
}

const generatePhrase = sentences => {
  const greetingArray = sentences.filter(
    ({ position, isApproved }) => position === 1 && isApproved === true
  );
  const reasonArray = sentences.filter(
    ({ position, isApproved }) => position === 2 && isApproved === true
  );
  const goodbyeArray = sentences.filter(
    ({ position, isApproved }) => position === 3 && isApproved === true
  );

  const random = array => array[Math.floor(Math.random() * array.length)];

  const greeting = random(greetingArray).text;
  const reason = random(reasonArray).text;
  const goodbye = random(goodbyeArray).text;

  return `${greeting}, ${reason}, ${goodbye}`;
};

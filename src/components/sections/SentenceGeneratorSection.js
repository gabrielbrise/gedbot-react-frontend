import React, { Component } from "react";
import SentenceResult from "../SentenceResult";
import CopySentenceButton from "../buttons/CopySentenceButton";
import GenerateSentenceButton from "../buttons/GenerateSentenceButton";
import generatePhrase from "../../helpers/generatePhrase";
import copyText from "../../helpers/copyText";

export default class SentenceGeneratorSection extends Component {
  state = {
    sentence:
      "hey guys, meu chuveiro estragou e estou envolvido com isso, divirtam-se",
  };

  render = () => (
    <div className="Flex AICenter FlexColumn PT8">
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
    </div>
  );
}

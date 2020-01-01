import React from "react";
import DropdownSection from "../DropdownSection";
import VotingCard from "../VotingCard";
import Sentences from "../../mocks/Sentences";

const SentenceGeneratorSection = () => (
  <DropdownSection title="Vote nas melhores">
    <div className="MRow JCCenter">
      {Object.entries(Sentences).map(([key, val]) => (
        <div className="MH12 PB24">
          <div className="TextBold FS2x">{parseNames(key)}</div>
          <div className="Flex FlexColumn JCCenter">
            {Sentences[key].map(({ position, score, text, isApproved }) => (
              <VotingCard score={score} sentence={text} />
            ))}
          </div>
        </div>
      ))}
    </div>
  </DropdownSection>
);

export default SentenceGeneratorSection;

const parseNames = name => {
  switch (name) {
    case "greeting":
      return "saudação";
    case "reason":
      return "desculpa";
    case "goodbye":
      return "despedida";
    default:
      return "";
  }
};

import React from "react";
import DropdownSection from "../DropdownSection";
import VotingCard from "../VotingCard";
import Votes from "../../mocks/Votes";

const SentenceGeneratorSection = () => (
  <DropdownSection title="Vote nas melhores">
    <div className="Flex FlexRow JCCenter">
      {Object.entries(Votes).map(([key, val]) => (
        <div className="MH12">
          <div>{key}</div>
          <div className="Flex FlexColumn JCCenter">
            {Votes[key].map(({ position, score, text, isApproved }) => (
              <VotingCard score={score} sentence={text} />
            ))}
          </div>
        </div>
      ))}
    </div>
  </DropdownSection>
);

export default SentenceGeneratorSection;

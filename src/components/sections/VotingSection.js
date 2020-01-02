import React from "react";
import DropdownSection from "../DropdownSection";
import VotingCard from "../VotingCard";

const VotingSection = ({ sentences }) => (
  <DropdownSection title="Vote nas melhores">
    <div className="MRow JCCenter">
      {Object.entries(parseSentences(sentences)).map(([position, val]) => (
        <div className="MH12 PB24">
          <div className="TextBold FS2x">{parseNames(position)}</div>
          <div className="Flex FlexColumn JCCenter">
            {parseSentences(sentences)[position].map(
              ({ score, text, isApproved }, key) => (
                <VotingCard
                  score={score}
                  sentence={text}
                  key={`vote-${position}-${key}`}
                />
              )
            )}
          </div>
        </div>
      ))}
    </div>
  </DropdownSection>
);

export default VotingSection;

const parseSentences = sentences => {
  const greeting = sentences.filter(
    ({ position, isApproved }) => position === 1 && isApproved === false
  );
  const reason = sentences.filter(
    ({ position, isApproved }) => position === 2 && isApproved === false
  );
  const goodbye = sentences.filter(
    ({ position, isApproved }) => position === 3 && isApproved === false
  );
  return { greeting, reason, goodbye };
};

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

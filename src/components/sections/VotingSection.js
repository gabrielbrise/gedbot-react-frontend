import React from "react";
import DropdownSection from "../DropdownSection";
import VotingCard from "../VotingCard";
import Loader from "../Loader";

const VotingSection = ({ sentences, fetched }) => (
  <DropdownSection title="Vote nas sugestões">
    {!fetched ? (
      <Loader />
    ) : (
      <div className="MRow JCCenter">
        {Object.entries(parseSentences(sentences)).map(([position, val]) => (
          <div className="MH12 PB24" key={`position-${position}`}>
            <div className="TextBold FS2x">{parseNames(position)}</div>
            <div className="Flex FlexColumn JCCenter">
              {parseSentences(sentences)[position].map(
                ({ score, text, _id, isPositive, isVoted }, key) => (
                  <VotingCard
                    score={score}
                    sentence={text}
                    key={`vote-${position}-${key}`}
                    id={_id}
                    isPositive={isPositive}
                    isVoted={isVoted}
                  />
                )
              )}
            </div>
          </div>
        ))}
      </div>
    )}
  </DropdownSection>
);

export default VotingSection;

const parseSentences = sentences => {
  const greeting = sentences.filter(
    ({ position, isApproved }) => position === 1 && isApproved !== true
  );
  const reason = sentences.filter(
    ({ position, isApproved }) => position === 2 && isApproved !== true
  );
  const goodbye = sentences.filter(
    ({ position, isApproved }) => position === 3 && isApproved !== true
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

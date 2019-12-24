import React from "react";
import SentenceResult from "../SentenceResult";
import GenerateSentenceButton from "../GenerateSentenceButton";
import CopySentenceButton from "../CopySentenceButton";

const SentenceGeneratorSection = () => (
  <div className="Flex AICenter FlexColumn">
    <SentenceResult sentence="hey guys, meu chuveiro estragou e estou envolvido com isso, divirtam-se" />
    <div className="Flex FlexRow PB24">
      <GenerateSentenceButton />
      <CopySentenceButton />
    </div>
  </div>
);

export default SentenceGeneratorSection;

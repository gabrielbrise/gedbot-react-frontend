import React from "react";
import DropdownSection from "../DropdownSection";
import SendSentenceButton from "../SendSentenceButton";
import SentenceForm from "../SentenceForm";

const SentenceGeneratorSection = () => (
  <DropdownSection title="Adicione suas respostas">
    <SentenceForm />
    <SendSentenceButton>ENVIAR</SendSentenceButton>
  </DropdownSection>
);

export default SentenceGeneratorSection;

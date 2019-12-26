import React from "react";
import SentenceInput from "./SentenceInput";
import SendSentenceButton from "./SendSentenceButton";

const SentenceForm = () => (
  <form className="Flex FlexColumn AICenter">
    <div className="MRow JCCenter AICenter">
      <SentenceInput label="saudação"></SentenceInput>
      <SentenceInput label="desculpa" size={"500px"}></SentenceInput>
      <SentenceInput label="despedida"></SentenceInput>
    </div>
    <SendSentenceButton>ENVIAR</SendSentenceButton>
  </form>
);

export default SentenceForm;

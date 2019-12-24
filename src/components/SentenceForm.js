import React from "react";
import SentenceInput from "./SentenceInput";

const SentenceForm = () => (
  <div className="Flex JCCenter AICenter">
    <SentenceInput label="saudação"></SentenceInput>
    <SentenceInput label="desculpa" size={"500px"}></SentenceInput>
    <SentenceInput label="despedida"></SentenceInput>
  </div>
);

export default SentenceForm;

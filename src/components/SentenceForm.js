import React, { Component } from "react";
import SentenceInput from "./SentenceInput";
import SendSentenceButton from "./SendSentenceButton";

export default class SentenceForm extends Component {
  state = {
    greeting: "",
    reason: "",
    goodbye: ""
  };

  handleChange = (event, position) => {
    console.log({ [position]: event.target.value });
    this.setState({ [position]: event.target.value });
  };
  handleSubmit = event => {
    event.preventDefault();
    const sentences = [
      this.state.greeting,
      this.state.reason,
      this.state.goodbye
    ];
    const filteredSentences = sentences.filter(sentence => sentence !== "");
    const parsedSentences = filteredSentences.map((sentence, position) => ({
      text: sentence,
      position: position + 1
    }));

    this.sendSentences({ sentences: parsedSentences });
  };

  sendSentences = sentences => {
    const options = {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(sentences)
    };
    fetch(`http://localhost:5000/api/v1/sentences`, options);
    this.setState({ greeting: "", reason: "", goodbye: "" });
  };
  render = () => (
    <form onSubmit={this.handleSubmit} className="Flex FlexColumn AICenter">
      <div className="MRow JCCenter AICenter">
        <SentenceInput
          label="saudação"
          onChange={event => this.handleChange(event, "greeting")}
          value={this.state.greeting}
        ></SentenceInput>
        <SentenceInput
          label="desculpa"
          size={"500px"}
          onChange={event => this.handleChange(event, "reason")}
          value={this.state.reason}
        ></SentenceInput>
        <SentenceInput
          label="despedida"
          onChange={event => this.handleChange(event, "goodbye")}
          value={this.state.goodbye}
        ></SentenceInput>
      </div>
      <SendSentenceButton>ENVIAR</SendSentenceButton>
    </form>
  );
}

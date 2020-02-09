import React, { Component } from "react";
import SentenceInput from "./SentenceInput";
import Button from "./Button";

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

  parseText = text => text.replace(/^(\W+)(\w.+\w)(\W+)$/, `$2`).toLowerCase();

  handleSubmit = event => {
    event.preventDefault();
    const sentences = [
      this.state.greeting,
      this.state.reason,
      this.state.goodbye
    ];
    const parsedSentences = sentences.map((sentence, index) => {
      return {
        text: this.parseText(sentence),
        position: index + 1
      };
    });
    const filteredSentences = parsedSentences.filter(({ text }) => text !== "");

    this.sendSentences({ sentences: filteredSentences });
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
    fetch(`${process.env.REACT_APP_API_URL}/api/v1/sentences`, options);
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
      <Button>ENVIAR</Button>
    </form>
  );
}

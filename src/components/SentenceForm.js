import React, { Component } from "react";
import SentenceInput from "./SentenceInput";
import Button from "./buttons/Button";
import Loader from "./Loader";
import { toast } from "react-toastify";

export default class SentenceForm extends Component {
  state = {
    greeting: "",
    reason: "",
    goodbye: "",
    fetching: false,
  };

  handleChange = (event, position) => {
    this.setState({ [position]: event.target.value });
  };

  componentDidMount = () => {
    window.handleRecaptcha = () => this.handleSubmit();
  };

  parseText = (text) =>
    text.replace(/^(\W+)(\w.+\w)(\W+)$/, `$2`).toLowerCase();

  handleSubmit = () => {
    const sentences = [
      this.state.greeting,
      this.state.reason,
      this.state.goodbye,
    ];
    const parsedSentences = sentences.map((sentence, index) => {
      return {
        text: this.parseText(sentence),
        position: index + 1,
      };
    });
    const filteredSentences = parsedSentences.filter(({ text }) => text !== "");

    this.sendSentences({ sentences: filteredSentences });
  };

  sendSentences = (sentences) => {
    const options = {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(sentences),
    };
    fetch(`${process.env.REACT_APP_API_URL}/api/v1/sentences`, options)
      .then(() => {
        toast("Sugestões enviadas com sucesso!", {
          progressClassName: "SuccessProgressBar",
        });
        return this.setState({
          greeting: "",
          reason: "",
          goodbye: "",
          fetching: false,
        });
      })
      .catch((err) => {
        console.error(err);
        return toast("Erro ao enviar sugestões :(", {
          type: toast.TYPE.ERROR,
        });
      });
  };
  render = () => (
    <form
      id="sentence"
      onSubmit={this.handleSubmit}
      className="Flex FlexColumn AICenter PT12"
    >
      <div className="MRow JCCenter AICenter">
        <SentenceInput
          label="saudação"
          onChange={(event) => this.handleChange(event, "greeting")}
          value={this.state.greeting}
        ></SentenceInput>
        <SentenceInput
          label="desculpa"
          size="500px"
          onChange={(event) => this.handleChange(event, "reason")}
          value={this.state.reason}
        ></SentenceInput>
        <SentenceInput
          label="despedida"
          onChange={(event) => this.handleChange(event, "goodbye")}
          value={this.state.goodbye}
        ></SentenceInput>
      </div>
      {!this.state.fetching ? (
        <Button
          captcha
          onClick={this.handleSubmit}
          setFetching={() => this.setState({ fetching: true })}
        >
          ENVIAR
        </Button>
      ) : (
        <div className="MV12">
          <Loader />
        </div>
      )}
    </form>
  );
}

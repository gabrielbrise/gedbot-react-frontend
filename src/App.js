import React, { Component } from "react";
import Header from "./components/Header";
import "./App.css";
import SentenceGeneratorSection from "./components/sections/SentenceGeneratorSection";
import HowToSection from "./components/sections/HowToSection";
import SendSentenceSection from "./components/sections/SendSentenceSection";
import VotingSection from "./components/sections/VotingSection";
import DrawingLines from "./components/DrawingLines";
import fetchData from "./helpers/fetchData";
import gtagInitialize from "./helpers/gtag";

export default class App extends Component {
  state = {
    sentences: [],
    votes: [],
    fetched: false
  };

  componentDidMount = async () =>
    fetchData()
      .then(res =>
        this.setState({
          sentences: res.sentences.data,
          votes: res.votes.data,
          fetched: true
        })
      )
      .then(() => gtagInitialize());

  render = () => (
    <div className="App Flex FlexColumn AICenter">
      <DrawingLines />
      <>
        <Header title="GEDbot" subtitle="gerador de desculpas" />
        <SentenceGeneratorSection
          sentences={this.state.sentences}
          fetched={this.state.fetched}
        />
        <HowToSection />
        <SendSentenceSection />
        <VotingSection
          sentences={this.state.sentences}
          fetched={this.state.fetched}
        />
      </>
    </div>
  );
}

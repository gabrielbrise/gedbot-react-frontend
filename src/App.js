import React, { Component } from "react";
import Header from "./components/Header";
import "./App.css";
import SentenceGeneratorSection from "./components/sections/SentenceGeneratorSection";
import SendSentenceSection from "./components/sections/SendSentenceSection";
import VotingSection from "./components/sections/VotingSection";
import DrawingLines from "./components/DrawingLines";
import fetchData from "./helpers/fetchData";
import Loader from "./components/Loader";

export default class App extends Component {
  state = {
    sentences: [],
    votes: [],
    fetched: false
  };

  componentDidMount = async () =>
    fetchData().then(res =>
      this.setState({
        sentences: res.sentences.data,
        votes: res.votes.data,
        fetched: true
      })
    );

  render = () => (
    <div className="App Flex FlexColumn AICenter">
      <DrawingLines />
      {this.state.fetched ? (
        <>
          <Header title="GEDbot" subtitle="gerador de desculpas" />
          <SentenceGeneratorSection sentences={this.state.sentences} />
          <SendSentenceSection />
          <VotingSection sentences={this.state.sentences} />
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
}

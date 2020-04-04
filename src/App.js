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
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styled from "styled-components";

export default class App extends Component {
  state = {
    sentences: [],
    fetched: false,
  };

  componentDidMount = async () =>
    await fetchData()
      .then((res) =>
        this.setState({
          sentences: res.sentences.data,
          fetched: true,
        })
      )
      .then(() => gtagInitialize())
      .catch((error) => console.error(error));

  render = () => (
    <Container className="App Flex FlexColumn AICenter">
      <DrawingLines />
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
      <ToastContainer />
    </Container>
  );
}

const Container = styled.div`
  text-align: center;
  padding-top: 20vh;
  position: relative;
  @media (min-width: 960px) {
    padding-top: 30vh;
  }
`;

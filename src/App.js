import React from "react";
import Header from "./components/Header";
import "./App.css";
import SentenceGeneratorSection from "./components/sections/SentenceGeneratorSection";
import SendSentenceSection from "./components/sections/SendSentenceSection";
import VotingSection from "./components/sections/VotingSection";
import DrawingLines from "./components/DrawingLines";

const App = () => (
  <div className="App Flex FlexColumn AICenter">
    <DrawingLines />
    <Header title="GEDbot" subtitle="gerador de desculpas" />
    <SentenceGeneratorSection />
    <SendSentenceSection />
    <VotingSection />
  </div>
);

export default App;

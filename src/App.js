import React from "react";
import Header from "./components/Header";
import "./App.css";
import SentenceGeneratorSection from "./components/sections/SentenceGeneratorSection";
import SendSentenceSection from "./components/sections/SendSentenceSection";
import DropdownSection from "./components/DropdownSection";
import DrawingLines from "./components/DrawingLines";

const App = () => (
  <div className="App Flex FlexColumn AICenter">
    <DrawingLines />
    <Header title="GEDbot" subtitle="gerador de desculpas" />
    <SentenceGeneratorSection />
    <SendSentenceSection />

    <DropdownSection title="Vote nas melhores">
      <div>teste</div>
      <div>teste</div>
      <div>teste</div>
      <div>teste</div>
      <div>teste</div>
      <div>teste</div>
      <div>teste</div>
      <div>teste</div>
    </DropdownSection>
  </div>
);

export default App;

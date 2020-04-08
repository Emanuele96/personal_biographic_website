import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { AppBar } from "@material-ui/core/";
import { Toolbar } from "@material-ui/core";
import Title from "./components/Title/Title";
import Section from "./components/Section/Section";

function App() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Title destination={"hello"} name={"Loren"}></Title>
        </Toolbar>
      </AppBar>
      <Section id={"llo"}></Section>
      <Section id={"llo"}></Section>
      <Section id={"hello"}></Section>
    </div>
  );
}

export default App;

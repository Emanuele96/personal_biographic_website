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
          <Title destination={"aboutme"} name={"About Me"}></Title>
          <Title destination={"hello"} name={"Projects"}></Title>
          <Title destination={"hello"} name={"CV"}></Title>
          <Title destination={"hello"} name={"Contacs"}></Title>
        </Toolbar>
      </AppBar>
      <Section id={"aboutme"}></Section>
    </div>
  );
}

export default App;

import axios from "axios";
import "./input.css";
import React, { useState } from "react";
import { ApiProvider } from "./Context/ApiContext";
import Container from "./Components/Container";

function App() {
  return (
    <div className="App overflow-hidden bg-stone-900">
      <ApiProvider>
        <Container />
      </ApiProvider>
    </div>
  );
}

export default App;

import React, { useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Cards from "./components/Cards/Cards.jsx";

function App() {
  const [characters, setCharacters] = useState([]);

  const example = {
    name: "Morty Smith",
    species: "Human",
    gender: "Male",
    image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
  };

  function asd() {
    setCharacters(example);
  }


  return (
    <div className="App" style={{ padding: "25px" }}>
      <Nav onSearch={asd} />
      <hr />
      <div>
        <Cards characters={characters} />
      </div>
    </div>
  );
}

export default App;

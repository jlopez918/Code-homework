import React from "react";
import RickAndMortyCharacterCard from "./components/RickAndMortyCharacterCard/RickAndMortyCharacterCard";

function App() {
  return (
    <div className="card-container">
      <h1>Personajes de Rick and morty</h1>
      <div className="card-row">
        {/* 
        Ahora con esta lógica puedes renderizar vla información de varios personajes
      */}
        <RickAndMortyCharacterCard id={1} />
        <RickAndMortyCharacterCard id={2} />
        <RickAndMortyCharacterCard id={3} />
        <RickAndMortyCharacterCard id={10} />
      </div>
    </div>
  );
}

export default App;

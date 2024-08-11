import React, { useState, useEffect } from "react";
import CharacterCard from "../CharacterCard/CharacterCard";
function RickAndMortyCharacterCard({ id }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [genre, setGenre] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    // Este useEffect se ejecutará cuando el id cambie
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.json())
      .then((result) => {
        console.log(result); // Resultado del endpoint
        // Utiliza la variable result para actualizar las variables de estado
        setName(result.name);
        setImage(result.image);
        setGenre(result.gender);
        setStatus(result.status);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [id]);

  return (
    <div className="card">
      <CharacterCard name={name} image={image} genre={genre} status={status} />
    </div>
  );
}

export default RickAndMortyCharacterCard;

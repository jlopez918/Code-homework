import React from "react";
import Title from "../Titulo/titleComponent";
import Image from "../Imagen/imageComponent";
import Details from "../Details/detailsComponent";
import "../../App.css";

function CharacterCard(props) {
  return (
    <div className="character-card">
      <Title title={props.name} />
      <Image url={props.image} />
      <Details genre={props.genre} status={props.status} />
    </div>
  );
}

export default CharacterCard;

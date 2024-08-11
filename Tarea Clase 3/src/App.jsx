import React from "react";
import Title from "./components/Titulo/titleComponent";
import Image from "./components/Imagen/imageComponent";
import Details from "./components/Details/detailsComponent";
import Image2 from "./components/Imagen/image2Component";
import Image3 from "./components/Imagen/image3Component";
import "./App.css";

function App() {
  return (
    <div>
      <div className="card">
        <div className="wrapper">
          <Image url="./Razielcover.jpg" />
        </div>
        <Image2 url="./Razieltitle.png" />
        <Image3 url="./Razielcharacter.jpg" />
      </div>
      <div className="text-container">
        <div className="title">
          <Title title="Raziel" />
        </div>

        <div className="detail">
          <Details genre="Undead" status="Desconocido" />
        </div>
      </div>
    </div>
  );
}

export default App;

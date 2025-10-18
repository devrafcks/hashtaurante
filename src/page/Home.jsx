import { useState } from "react";
import "./Home.css";
import ImgRestaurante from "../assets/hashtaurante.webp";
import Cards from "../components/CardList";
import Navegacao from "../components/Navegacao";

function App() {
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(0);

  return (
    <>
      <div className="container">
        <div className="banner">
          <img src={ImgRestaurante} alt="Imagem do Hashtaurante" />
        </div>

        <Navegacao
          categoriaSelecionada={categoriaSelecionada}
          setCategoriaSelecionada={setCategoriaSelecionada}
        />

        <Cards categoriaSelecionada={categoriaSelecionada} />
      </div>
    </>
  );
}

export default App;

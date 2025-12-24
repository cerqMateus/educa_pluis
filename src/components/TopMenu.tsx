import { useState } from "react";
import TopMenuButton from "./ui/TopMenuButton";

const TopMenu = () => {
  const [activeButton, setActiveButton] = useState<string>("Principal");

  return (
    <div className="flex space-x-4 p-4 items-center justify-center">
      <TopMenuButton
        isActive={activeButton === "Principal"}
        onClick={() => setActiveButton("Principal")}
      >
        Principal
      </TopMenuButton>
      <TopMenuButton
        isActive={activeButton === "Sobre nós"}
        onClick={() => setActiveButton("Sobre nós")}
      >
        Sobre nós
      </TopMenuButton>
      <TopMenuButton
        isActive={activeButton === "Destaques"}
        onClick={() => setActiveButton("Destaques")}
      >
        Destaques
      </TopMenuButton>
      <TopMenuButton
        isActive={activeButton === "Galeria"}
        onClick={() => setActiveButton("Galeria")}
      >
        Galeria
      </TopMenuButton>
      <TopMenuButton
        isActive={activeButton === "Depoimentos"}
        onClick={() => setActiveButton("Depoimentos")}
      >
        Depoimentos
      </TopMenuButton>
      <TopMenuButton
        isActive={activeButton === "Eventos"}
        onClick={() => setActiveButton("Eventos")}
      >
        Eventos
      </TopMenuButton>
      <TopMenuButton
        isActive={activeButton === "Contato"}
        onClick={() => setActiveButton("Contato")}
      >
        Contato
      </TopMenuButton>
    </div>
  );
};

export default TopMenu;

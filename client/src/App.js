import { useState, useEffect } from "react";
import { CraftingPage } from "./components/CraftingPage.components";
import { WorldPage } from "./components/WorldPage.components";
import { BattleField } from "./components/battleField.components";
import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom";
import { InventoryPage } from "./components/InventoryPage.components";
import { Header } from "./components/Header.components";
import axios from "axios";
import "./App.css";

const endPoint = "http://localhost:5555";
export const App = () => {
  const [character, setCharacter] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const charResponse = await axios.get(endPoint + "/api/character");
      const characterData = charResponse.data[0];
      console.log(characterData);
      if (!characterData.hasOwnProperty("status")) {
        const baseStatus = {
          damage: 5,
          hp: 20,
          mp: 20,
        };
        characterData.status = baseStatus;
        characterData.materials = {};
        await axios.put(endPoint + "/api/character", characterData);
      }
      setCharacter(characterData);
    };
    character && fetchData();
  }, []);

  return (
    <div className="background">
      <div className="game-container">
        <BrowserRouter>
          <Header />
          <WorldPage character={character} setCharacter={setCharacter} />
          <Switch>
            <Route
              path="/crafting"
              exact
              component={() => (
                <CraftingPage
                  character={character}
                  setCharacter={setCharacter}
                />
              )}
            />
            <Route
              path="/inventory"
              exact
              component={() => <InventoryPage character={character} />}
            />
            <Route
              path="/battle"
              exact
              component={() => <BattleField character={character} />}
            />
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
};

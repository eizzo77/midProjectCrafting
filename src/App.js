import { useState, useEffect } from "react";
import { CraftingPage } from "./components/CraftingPage.components";
import { WorldPage } from "./components/WorldPage.components";
import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom";
import { WeaponAvatar } from "./components/WeaponAvatar.components";
import { Header } from "./components/Header.components";
import axios from "axios";
import "./App.css";

export const App = () => {
  // const [character, setCharacter] = useState({});

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const data = await axios.get(
  //       `https://605cf2c16d85de00170db556.mockapi.io/Character/1`
  //     );
  //     const characterData = data.data;
  //     if (!characterData.hasOwnProperty("status")) {
  //       const baseStatus = {
  //         damage: 5,
  //         hp: 20,
  //         mp: 20,
  //       };
  //       characterData.status = baseStatus;
  //       await axios.put(
  //         "https://605cf2c16d85de00170db556.mockapi.io/Character/1",
  //         characterData
  //       );
  //     }
  //     setCharacter(characterData);
  //   };
  //   character && fetchData();
  // }, []);

  return (
    <div className="background">
      <div className="game-container">
        <BrowserRouter>
          <Header />
          {/* <WorldPage /> */}
          <Switch>
            <Route path="/" exact component={WorldPage} />
            <Route path="/crafting" exact component={CraftingPage} />
            <Route path="/crafting/:id" exact component={WeaponAvatar} />
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
};

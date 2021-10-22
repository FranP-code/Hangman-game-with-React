import React, {useState} from "react";

//import PuzzleWord from "./components/Hangman/PuzzleWord/PuzzleWord";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AppHeader from "./components/Game/components/AppHeader/AppHeader";
import AdminHeader from "./components/AdminIdentify/Header/AdminHeader";
import ControlPanel from "./components/AdminIdentify/Identify/Identify";
import Identify from "./components/AdminIdentify/Identify/Identify";
import Game from "./components/Game/Game";
import AdminIdentify from "./components/AdminIdentify/AdminIdentify";

function App() {
  return (
    <Router>
      <>
        <Switch>

          

          <Route path='/identify'>

            <AdminIdentify />

          </Route>

          <Route path="/">

            <Game />

          </Route>

        </Switch>
      </>
   </Router>
  );
}

export default App;

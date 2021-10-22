import React, {useState} from "react";

//import PuzzleWord from "./components/Hangman/PuzzleWord/PuzzleWord";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AppHeader from "./components/Game/components/AppHeader/AppHeader";
import AdminHeader from "./components/Admin/Header/AdminHeader";
import ControlPanel from "./components/Admin/Identify/Identify";
import Identify from "./components/Admin/Identify/Identify";
import Game from "./components/Game/Game";
import Admin from "./components/Admin/Admin";

function App() {
  return (
    <Router>
      <>
        <Switch>

          <Route path='/identify'>

            <Admin />

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

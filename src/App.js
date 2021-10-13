import React, {useState} from "react";
import CurrentScore from "./components/CurrentScore";
import Hangman from "./components/Hangman/Hangman";
import Header from "./components/Header";

function App() {

  const [language, setLanguage] = useState('english')
  const [currentScore, setCurrentScore] = useState(0)

  return (
   <>
    <Header language={language}/>
    
    <div className="app">
      <Hangman />
      
      <CurrentScore currentScore={currentScore} />
    </div>
   </>
  );
}

export default App;

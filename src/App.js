import React, {useState} from "react";
import CurrentScore from "./components/CurrentScore";
import Hangman from "./components/Hangman/Hangman";
import Header from "./components/Header";
import PuzzleWord from "./components/Hangman/PuzzleWord/PuzzleWord";

function App() {

  const [language, setLanguage] = useState('english')
  const [currentScore, setCurrentScore] = useState(0)

  const [hangmanFrame, setHangmanFrame] = useState(0)

  return (
   <>
    <Header language={language}/>
    
    <div className="app">

      <div className='column-1'>
        <Hangman
          hangmanFrame={hangmanFrame}
        />
      </div>
      
      <div className='column-2'>
        <CurrentScore currentScore={currentScore} />
        <PuzzleWord

          hangmanFrame={hangmanFrame}
          setHangmanFrame={setHangmanFrame}
        />

      </div>

    </div>
   </>
  );
}

export default App;

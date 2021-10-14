import React, {useState} from "react";
import CurrentScore from "./components/CurrentScore";
import Hangman from "./components/Hangman/Hangman";
import Header from "./components/Header";
import PuzzleWord from "./components/Hangman/PuzzleWord/PuzzleWord";
import Victory from "./components/Hangman/PuzzleWord/Victory";
import Defeat from "./components/Hangman/PuzzleWord/Defeat";

function App() {

  const [language, setLanguage] = useState('english')
  const [currentScore, setCurrentScore] = useState(0)

  const [hangmanFrame, setHangmanFrame] = useState(0)

  const [isVictory, setIsVictory] = useState(false)
  const [isDefeat, setIsDefeat] = useState(false)

  const [keyPuzzleWord, setKeyPuzzleWord] = useState(1)

  if (isVictory || isDefeat) {
    
    
    setTimeout(() => {
        setHangmanFrame(0)

        setIsVictory(false)
        setIsDefeat(false)

        setKeyPuzzleWord(keyPuzzleWord + 1)
        }, 3000)
  }

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

        { isVictory || isDefeat ? null :

          <PuzzleWord

          key={keyPuzzleWord}

          hangmanFrame={hangmanFrame}
          setHangmanFrame={setHangmanFrame}

          currentScore={currentScore}
          setCurrentScore={setCurrentScore}

          isVictory={isVictory}
          setIsVictory={setIsVictory}

          isDefeat={isDefeat}
          setIsDefeat={setIsDefeat}
          />

        }
        

        {isVictory ? <Victory currentScore={currentScore} setCurrentScore={setCurrentScore} /> : null}
        {isDefeat ? <Defeat /> : null}

      </div>

    </div>
   </>
  );
}

export default App;

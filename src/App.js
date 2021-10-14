import React, {useState} from "react";
import CurrentScore from "./components/CurrentScore";
import Hangman from "./components/Hangman/Hangman";
import Header from "./components/Header";
import PuzzleWord from "./components/Hangman/PuzzleWord/PuzzleWord";
import Victory from "./components/Hangman/PuzzleWord/Victory";
import Defeat from "./components/Hangman/PuzzleWord/Defeat";
import Loading from "./components/Loading";
import AlmacenateCurrentScore from "./components/Scripts/AlmacenateCurrentScore";

function App() {

  const [language, setLanguage] = useState('english')
  const [currentScore, setCurrentScore] = useState(0)

  const [hangmanFrame, setHangmanFrame] = useState(0)

  const [isVictory, setIsVictory] = useState(false)
  const [isDefeat, setIsDefeat] = useState(false)

  const [displayApp, setDisplayApp] = useState(false)

  React.useEffect(() => {

    if (localStorage.getItem('currentScore')) {
      
      setCurrentScore(localStorage.getItem('currentScore'))
      localStorage.removeItem('currentScore')
    }

  })

  if (isVictory || isDefeat) {
    
    
    setTimeout(() => {
        AlmacenateCurrentScore(currentScore)

        window.location.reload(true);
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

          {!displayApp ? <Loading /> : null }

          <PuzzleWord

          hangmanFrame={hangmanFrame}
          setHangmanFrame={setHangmanFrame}

          currentScore={currentScore}
          setCurrentScore={setCurrentScore}

          isVictory={isVictory}
          setIsVictory={setIsVictory}

          isDefeat={isDefeat}
          setIsDefeat={setIsDefeat}

          setDisplayApp={setDisplayApp}
          />

        {isVictory ? <Victory currentScore={currentScore} setCurrentScore={setCurrentScore} /> : null}
        {isDefeat ? <Defeat /> : null}

      </div>

    </div>
   </>
  );
}

export default App;

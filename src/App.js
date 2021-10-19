import React, {useState} from "react";
import CurrentScore from "./components/CurrentScore";
import Hangman from "./components/Hangman/Hangman";
import Header from "./components/Header";
import PuzzleWord from "./components/Hangman/PuzzleWord/PuzzleWord";
import Victory from "./components/Hangman/PuzzleWord/Victory";
import Defeat from "./components/Hangman/PuzzleWord/Defeat";
import Loading from "./components/Loading";
import AlmacenateCurrentScore from "./components/Scripts/AlmacenateCurrentScore";
import DetermineUserLanguage from "./components/Scripts/DetermineUserLanguage";
import Categories from "./components/Categories/Categories";
import ChangeTitle from "./components/Scripts/ChangeTitle";
import AlmacenateCategory from "./components/Scripts/AlmacenateCategory";
import { RecoveryCurrentScore } from "./components/Scripts/RecoveryCurrentScore";
import { RecoveryCurrentCategory } from "./components/Scripts/RecoveryCurrentCategory";
import { RecoveryCurrentLanguage } from "./components/Scripts/RecoveryCurrentLanguage";
import { AlmacenateLanguage } from "./components/Scripts/AlmacenateLanguage";

function App() {

  const [language, setLanguage] = useState('english')
  const [languageIsReady, setLanguageIsReady] = useState(false)

  const [category, setCategory] = useState(false)
  const [categoryIsReady, setcategoryIsReady] = useState(false)

  const [currentScore, setCurrentScore] = useState(0)

  const [hangmanFrame, setHangmanFrame] = useState(0)

  const [isVictory, setIsVictory] = useState(false)
  const [isDefeat, setIsDefeat] = useState(false)

  const [displayApp, setDisplayApp] = useState(false)
  const [displayCategories, setDisplayCategories] = useState(false)

  React.useEffect(() => {
    
    RecoveryCurrentScore(setCurrentScore)
    
    RecoveryCurrentCategory(setCategory)
    setcategoryIsReady(true)
    
    DetermineUserLanguage(setLanguage)
    RecoveryCurrentLanguage(setLanguage)
    ChangeTitle(language)
    setLanguageIsReady(true)

  }, [])

  if (isVictory || isDefeat) {
    
    
    setTimeout(() => {
        AlmacenateCurrentScore(currentScore)
        AlmacenateCategory(category)
        AlmacenateLanguage(language)

        window.location.reload(true)
        }, 3000)
  }

  return (
   <>
    <Header
      language={language}

      displayCategories={displayCategories}
      setDisplayCategories={setDisplayCategories}
    />
    
    <div className="app">
      
      {
        languageIsReady ?
        
        <div className='categories-container'>
          <Categories currentScore={currentScore} displayCategories={displayCategories} language={language} category={category} setCategory={setCategory} categoryIsReady={categoryIsReady} setLanguage={setLanguage}/>
      </div>

      :null
      }

      <div className='column-1'>
        <Hangman
          hangmanFrame={hangmanFrame}
          />
      </div>
      
      <div className='column-2'>


        <CurrentScore

          currentScore={currentScore}

          language={language}
        />

          {!displayApp ? <Loading /> : null }

          

          <PuzzleWord

          language={language}

          category={category}
          categoryIsReady={categoryIsReady}

          hangmanFrame={hangmanFrame}
          setHangmanFrame={setHangmanFrame}

          currentScore={currentScore}
          setCurrentScore={setCurrentScore}

          isVictory={isVictory}
          setIsVictory={setIsVictory}

          isDefeat={isDefeat}
          setIsDefeat={setIsDefeat}

          displayApp={displayApp}
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

import React, {useState} from "react";
import CurrentScore from "./components/CurrentScore/CurrentScore";
import Hangman from "./components/Hangman/Hangman";
import Header from "./components/Header/Header";
//import PuzzleWord from "./components/Hangman/PuzzleWord/PuzzleWord";
import Victory from "./components/Victory && Defeat/Victory";
import Defeat from "./components/Victory && Defeat/Defeat";
import Loading from "./components/Loading/Loading";
import AlmacenateCurrentScore from "./Storage Scripts/AlmacenateCurrentScore";
import DetermineUserLanguage from "./General Scripts/DetermineUserLanguage";
import Categories from "./components/Categories/Categories";
import ChangeTitle from "./General Scripts/ChangeTitle";
import AlmacenateCategory from "./Storage Scripts/AlmacenateCategory";
import { RecoveryCurrentScore } from "./Storage Scripts/RecoveryCurrentScore";
import { RecoveryCurrentCategory } from "./Storage Scripts/RecoveryCurrentCategory";
import { RecoveryCurrentLanguage } from "./Storage Scripts/RecoveryCurrentLanguage";
import { AlmacenateLanguage } from "./Storage Scripts/AlmacenateLanguage";
import WrongLetters from "./components/LettersRegistered/LettersRegistered";
import Word from "./components/Word/Word";
import LettersRegistered from "./components/LettersRegistered/LettersRegistered";
import alphabet from "./General Scripts/alphabet"
import checkVictory from "./General Scripts/checkVictory";
import checkDefeat from "./General Scripts/checkDefeat";

function App() {
  const [displayApp, setDisplayApp] = useState(true)

  const [selectedWord, setSelectedWord] = useState('TEST')

  const [correctLetters, setCorrectLetters] = useState([])
  const [lettersRegistered, setLettersRegistered] = useState([])
  
  const [language, setLanguage] = useState('english')
  const [languageIsReady, setLanguageIsReady] = useState(false)

  const [category, setCategory] = useState(false)
  const [categoryIsReady, setcategoryIsReady] = useState(false)

  const [currentScore, setCurrentScore] = useState(0)

  const [hangmanFrame, setHangmanFrame] = useState(0)

  const [endOfGame, setEndOfGame] = useState('')

  const [displayCategories, setDisplayCategories] = useState(false)

  React.useEffect(() => {
    RecoveryCurrentScore(setCurrentScore)
    
    RecoveryCurrentCategory(setCategory)
    setcategoryIsReady(true)
    
    DetermineUserLanguage(setLanguage)
    RecoveryCurrentLanguage(setLanguage)
    
    ChangeTitle(language)
    setLanguageIsReady(true)

    setSelectedWord(selectedWord.toLowerCase())
  }, [])

  React.useEffect(() => {
    
    const registerKeys = e => {

      const currentKey = e.key.toLowerCase()

      if (displayApp) {
        
        if (alphabet.includes(currentKey)) {

          setLettersRegistered([...lettersRegistered, currentKey])

          if (selectedWord.includes(currentKey)) {

            if (!correctLetters.includes(currentKey)) {
              
              setCorrectLetters([...correctLetters, currentKey])
            
              checkVictory(setEndOfGame)
            }

          }
            else {
              setHangmanFrame(hangmanFrame + 1)

              checkDefeat(setEndOfGame, hangmanFrame)
            }
        }
      }
    }

    window.addEventListener('keyup', registerKeys)

    return () => window.removeEventListener('keyup', registerKeys)

  }, [correctLetters, displayApp, lettersRegistered, setLettersRegistered, hangmanFrame, selectedWord])

  if (endOfGame) {
    
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
    
    <div className="game-container">
      
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

        <Word
          selectedWord={selectedWord}
          correctLetters={correctLetters}
        />

      </div>
    </div>

        {
          //!displayApp ? <Loading /> : null
        }

        {endOfGame === 'Victory' ? <Victory currentScore={currentScore} setCurrentScore={setCurrentScore} /> : null}
        {endOfGame === 'Defeat'  ? <Defeat /> : null}

    <LettersRegistered
          lettersRegistered={lettersRegistered}
        />
   </>
  );
}

export default App;

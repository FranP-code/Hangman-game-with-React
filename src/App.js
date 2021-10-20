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
import BringTheWords from "./Firebase Querys/BringTheWord";
import SelectRandomWord from "./Firebase Querys/SelectRandomWord";
import getWidthScreenUser from "./General Scripts/getWidthScreenUser";
import LetterInput from "./components/Letter Input/LetterInput";

function App() {
  const [displayApp, setDisplayApp] = useState(false)
  const [mobileUser, setMobileUser] = useState(false)

  const [selectedWord, setSelectedWord] = useState('')

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

  const bringWordFromFirebase = async () => {

    if (!displayApp && selectedWord === '') {
      setSelectedWord('a')

      let word = await BringTheWords(language, category, selectedWord)
          word = word.toLowerCase()
      
      console.log(word)
      await setSelectedWord(word)
      await setDisplayApp(true)
    }
  }
  
  React.useEffect(() => {    
    RecoveryCurrentScore(setCurrentScore)
    
    RecoveryCurrentCategory(setCategory)
    setcategoryIsReady(true)
    
    DetermineUserLanguage(setLanguage)
    RecoveryCurrentLanguage(setLanguage)
    setLanguageIsReady(true)
    
    ChangeTitle(language)
    setLanguageIsReady(true)
    getWidthScreenUser(setMobileUser)

    if (!displayApp && selectedWord === '' && categoryIsReady && languageIsReady) {
      bringWordFromFirebase()
    }

    console.log(category)
  }, [categoryIsReady])


  React.useEffect(() => {
    
    const registerKeys = e => {

      if (displayApp) {
        console.log(e)

        let currentKey
        
        if (!mobileUser) {

          currentKey = e.key.toLowerCase()
        }

        if (mobileUser) {

          currentKey = e.explicitOriginalTarget.nodeValue
        }
        
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

              checkDefeat(setEndOfGame, hangmanFrame, setCorrectLetters, selectedWord)
            }
        }
      }
    }

    window.addEventListener('keyup', registerKeys)

    return () => window.removeEventListener('keyup', registerKeys)

  }, [correctLetters, displayApp, lettersRegistered, setLettersRegistered, hangmanFrame, selectedWord])

  React.useEffect(() => {

    window.addEventListener('resize', () => getWidthScreenUser(setMobileUser))

    return () => window.removeEventListener('resize', () => getWidthScreenUser(setMobileUser))
  }, [])

  if (endOfGame) {
    
    setTimeout(() => {
        AlmacenateCurrentScore(currentScore)
        AlmacenateCategory(category)
        AlmacenateLanguage(language)

        window.location.reload(false)
        }, 3000)
  }

  return (
   <>
    <Header
      language={language}

      category={category}

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
          mobileUser ?
            <LetterInput
              displayApp={displayApp}

              setLettersRegistered={setLettersRegistered}
              lettersRegistered={lettersRegistered}

              selectedWord={selectedWord}

              setCorrectLetters={setCorrectLetters}
              correctLetters={correctLetters}

              setEndOfGame={setEndOfGame}

              setHangmanFrame={setHangmanFrame}
              hangmanFrame={hangmanFrame}

              checkVictory={checkVictory}
            />
          :null
        }
        {
          !displayApp ? <Loading /> : null
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

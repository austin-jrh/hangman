import { useCallback, useEffect, useState } from "react";
import randomWords from "random-words";
import { HangmanDrawing } from "./components/HangmanDrawing";
import { HangmanWord } from "./components/HangmanWord";
import { Keyboard } from "./components/Keyboard";
import { RestartGameButton } from "./components/RestartGameButton";

function getWord() {
  const words = randomWords({ min: 3, max: 10, exactly: 1 }); // returns array of string
  console.log(words);
  return words[0];
}

function App() {
  const [wordToGuess, setWordToGuess] = useState<string>(getWord);
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  const incorrectLetters = guessedLetters.filter(
    (letter) => !wordToGuess.includes(letter)
  );

  const isLoser = incorrectLetters.length >= 6; // 6 body parts
  const isWinner = wordToGuess
    .split("")
    .every((letter) => guessedLetters.includes(letter));

  const addGuessedLetter = useCallback(
    (letter: string) => {
      if (guessedLetters.includes(letter) || isLoser || isWinner) return;

      setGuessedLetters((currentLetters) => [...currentLetters, letter]);
    },
    [guessedLetters, isWinner, isLoser]
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;

      if (!key.match(/^[a-z]$/)) return;

      e.preventDefault();
      addGuessedLetter(key);
    };

    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, [addGuessedLetter]);

  function restartGame() {
    setGuessedLetters([]);
    setWordToGuess(getWord());
    console.log("restart game");
  }

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;

      if (key !== "Enter") return;

      e.preventDefault();
      restartGame();
    };

    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, []);

  return (
    <div
      style={{
        maxWidth: "800px",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        margin: "0 auto",
        alignItems: "center",
        background: "#B6EADA",
        padding: "30px",
        border: "10px solid #03001C",
        borderRadius: "25px",
      }}
    >
      <RestartGameButton onClick={restartGame} />
      <div
        style={{
          fontSize: "min(2rem,7vw)",
          textAlign: "center",
          fontFamily: "Space Grotesk",
        }}
      >
        {!(isWinner || isLoser) && "Guess the word!"}
        {isWinner && "You guessed it!"}
        {isLoser && "Better luck next time!"}
      </div>
      <div
        style={{
          fontSize: "min(1rem, 4vw)",
          textAlign: "center",
          fontFamily: "Space Grotesk",
          visibility: isWinner || isLoser ? "visible" : "hidden",
        }}
      >
        {"Click the restart button for a new word."}
      </div>
      <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
      <HangmanWord
        reveal={isLoser}
        guessedLetters={guessedLetters}
        wordToGuess={wordToGuess}
      />
      <div style={{ alignSelf: "stretch" }}>
        <Keyboard
          disabled={isWinner || isLoser}
          activeLetters={guessedLetters.filter((letter) =>
            wordToGuess.includes(letter)
          )}
          inactiveLetters={incorrectLetters}
          addGuessedLetter={addGuessedLetter}
        />
      </div>
    </div>
  );
}

export default App;

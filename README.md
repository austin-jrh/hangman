# Hangman

// to be stylized

Objective
To demonstrate things learned from SUTD Module: Fundamentals in Frontend Development by developing a reactive site with React and deployment pipeline.

Find the website here
Hangman (https://austin-jrh.github.io/hangman/)

Tech used
ReactJS
Vite
Typescript
ESLint
Jest
Github Actions
Github Pages
random-words (https://www.npmjs.com/package/random-words?activeTab=readme)
FontAwesome icons (https://fontawesome.com/docs/web/setup/packages)
Google fonts (https://fonts.google.com/)

CI/CD
The project uses Github Actions to perform CI/CD operations

1. Checkout Repository
2. Install NodeJS
3. Install Dependencies
4. Build Project
5. Run ESLint
6. Run Jest Tests (UI, Unit, Integration tests)
7. Send to deploy using github-pages

Tests
<App /> tests

1. Check whether all components are present (Hangman Drawing, Hangman Word, Keyboard, Reset Game Button)
2. Check that restart game works
3. Check that pressing a key will either appear in the word or draw the head of a hangman

<HangmanDrawing /> tests

1. Hangman stand is visible
2. Hangman body part is visible depending on the number of guesses

<HangmanWord /> tests

1. Revealed letters is visible
2. Displayed letters matches the word to guess

<Keyboard /> tests

1. All 26 keys are present and interactable
2. Unable to click disabled keys

Best-practice efforts

1. Using TypeScript

- easier to read code and avoid errors, show errors during compile time

2. Use of React Hooks

- using useEffect and useCallback

```
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
```

3. Don't use too many unnecessary states

```
  const incorrectLetters = guessedLetters.filter(
  (letter) => !wordToGuess.includes(letter)
);

const isLoser = incorrectLetters.length >= 6; // 6 body parts
const isWinner = wordToGuess
  .split("")
  .every((letter) => guessedLetters.includes(letter));
```

4. Use of linter and code formatter

- more readable code and detect mistakes early

5. Adding tests

- detect bugs and inconsistencies

type HangmanWordProps = {
  guessedLetters: string[];
  wordToGuess: string;
  reveal?: boolean;
};

export function HangmanWord({
  guessedLetters,
  wordToGuess,
  reveal = false,
}: HangmanWordProps) {
  // min(6rem, )
  const adjustedFontSize: string =
    "min(6rem," + String(90 / wordToGuess.length) + "vw)";
  return (
    <div
      style={{
        display: "flex",
        gap: ".25em",
        fontSize: adjustedFontSize,
        fontWeight: "bold",
        textTransform: "uppercase",
        fontFamily: "'Courier Prime', monospace",
      }}
      data-testid={"hangman-word"}
    >
      {wordToGuess.split("").map((letter, index) => (
        <span style={{ borderBottom: ".1em solid black" }} key={index}>
          <span
            style={{
              visibility:
                guessedLetters.includes(letter) || reveal
                  ? "visible"
                  : "hidden",
              color:
                !guessedLetters.includes(letter) && reveal ? "red" : "black",
            }}
            data-testid={`letter-index-${index}`}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
}

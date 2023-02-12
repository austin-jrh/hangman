import "@testing-library/jest-dom";
import { cleanup, render, screen } from "@testing-library/react";
import { HangmanWord } from "../components/HangmanWord";

afterEach(() => {
  cleanup();
});

describe("<HangmanWord />", () => {
  it("should be able to see revealed letters", () => {
    render(<HangmanWord guessedLetters={["h", "o"]} wordToGuess={"hello"} />);

    expect(screen.getByTestId(`letter-index-${0}`)).toBeVisible();
    expect(screen.getByTestId(`letter-index-${4}`)).toBeVisible();

    expect(screen.getByTestId(`letter-index-${1}`)).not.toBeVisible();
    expect(screen.getByTestId(`letter-index-${2}`)).not.toBeVisible();
    expect(screen.getByTestId(`letter-index-${3}`)).not.toBeVisible();
  });

  it("should have letters in the word", () => {
    render(<HangmanWord guessedLetters={[]} wordToGuess={"hello"} />);

    expect(screen.getByTestId(`letter-index-${0}`)).toHaveTextContent("h");
    expect(screen.getByTestId(`letter-index-${1}`)).toHaveTextContent("e");
    expect(screen.getByTestId(`letter-index-${2}`)).toHaveTextContent("l");
    expect(screen.getByTestId(`letter-index-${3}`)).toHaveTextContent("l");
    expect(screen.getByTestId(`letter-index-${4}`)).toHaveTextContent("o");
  });
});
